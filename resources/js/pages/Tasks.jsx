import { faCalendarDay, faList, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { AddToDoForm, ToDoItem, NoteItem } from '../components';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import '../../css/tasks.css';

export default function Tasks() {
    const [isTodosTab, showTodos] = useState(true);
    const [todos, setTodos] = useState();

    useEffect(() => {
        fetch('/todos')
            .then((res) => res.json())
            .then(setTodos);
    }, []);

    useEffect(() => {
        if (!!todos && todos.filter((d) => d.is_completed).length == todos.length) {
            confetti();
        }
    }, [todos]);

    const onAddTodo = (todo) => {
        setTodos((arr) => [...arr, todo]);
    };

    const onChangeTodo = (todo) => {
        setTodos((arr) =>
            arr.map((t) => {
                return t.id === todo.id ? todo : t;
            })
        );
    };

    return (
        <div className="tasks-container">
            <div className="tabs-container">
                <div className="tabs">
                    <div onClick={() => showTodos(true)}>
                        <FontAwesomeIcon icon={faList} />
                        <span className="tab-tooltip-text">My Todos</span>
                    </div>
                    <div onClick={() => showTodos(false)}>
                        <FontAwesomeIcon icon={faNoteSticky} />
                        <span className="tab-tooltip-text">My Notes</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span className="tab-tooltip-text">My Reminders</span>
                    </div>
                </div>
                <div className="tab-content-area">
                    {isTodosTab && todos ? (
                        <>
                            <div className="todos">
                                {todos.map((todo) => {
                                    return <ToDoItem key={todo.id} id={todo.id} dateCreated={todo.created_at} title={todo.title} checked={todo.is_completed} onChange={onChangeTodo} />;
                                })}
                                <div className="todos-meta">
                                    {todos.filter((d) => d.is_completed).length} of {todos.length} completed
                                </div>
                            </div>
                            <AddToDoForm onAdd={onAddTodo} />
                        </>
                    ) : (
                        <>
                            <div className="notes">
                                <NoteItem text="This is some text" />
                                <NoteItem text="This is some more fancier text" />
                            </div>
                            {/* AddNoteForm */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
