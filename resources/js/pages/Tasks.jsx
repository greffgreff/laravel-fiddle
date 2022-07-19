import { faCalendarDay, faList, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/tasks.css';
import { useState, useEffect } from 'react';
import AddToDoForm from '../components/AddToDoForm';
import ToDoItem from '../components/ToDoItem';
import NoteItem from '../components/NoteItem';

export default function Tasks() {
    const [isTodosTab, showTodos] = useState(true);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('/todos')
            .then((res) => res.json())
            .then(setTodos);
    }, []);

    const onAddTodo = (todo) => {
        setTodos((arr) => [...arr, todo]);
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
                    {isTodosTab ? (
                        <>
                            <div className="todos">
                                {todos.map((todo) => {
                                    return <ToDoItem key={todo.id} title={todo.title} checked={todo.complete} />;
                                })}
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
