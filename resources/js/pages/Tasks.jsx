import { faCalendarDay, faList, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import '../../css/tasks.css';
import AddToDoForm from '../components/AddToDoForm';
import ToDoItem from '../components/ToDoItem';
import NoteItem from '../components/NoteItem';
import uuid from 'react-native-uuid';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export default function Tasks() {
    const [todosTab, showTodos] = useState(true);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(todosData);
    }, []);

    // confetti()

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
                    {todosTab ? (
                        <div className="todos">
                            {todos.map((todo) => {
                                return <ToDoItem key={todo.id} title={todo.title} checked={todo.complete} />;
                            })}
                        </div>
                    ) : (
                        <div className="notes">
                            <NoteItem text="This is some text" />
                            <NoteItem text="This is some more fancier text" />
                        </div>
                    )}
                </div>
            </div>
            <AddToDoForm />
        </div>
    );
}

export const todosData = [
    {
        id: uuid.v4(),
        title: 'Task 1',
        complete: false,
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
    {
        id: uuid.v4(),
        title: 'Task 2',
        complete: false,
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
    {
        id: uuid.v4(),
        title: 'Task 3',
        complete: false,
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
    {
        id: uuid.v4(),
        title: 'Task 4',
        complete: false,
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
];

export const notesData = [
    {
        id: uuid.v4(),
        text: 'This is a note 1',
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
    {
        id: uuid.v4(),
        text: 'This is a note 2',
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
    {
        id: uuid.v4(),
        text: 'This is a note 3',
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
    {
        id: uuid.v4(),
        text: 'This is a note 4',
        dateAdded: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    },
];
