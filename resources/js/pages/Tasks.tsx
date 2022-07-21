import React from 'react';
import { faCalendarDay, faList, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { AddToDoForm, ToDoItem, NoteItem, NoteBlock, DraggableNoteBlock, AddNoteForm } from '../components';
import { Todo, Note } from '../types';
// @ts-ignore
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import '../../css/tasks.css';

export default function Tasks() {
    const [isTodosTab, showTodos] = useState(true);
    const [todos, setTodos] = useState<Todo[]>();
    const [notes, setNotes] = useState<Note[]>();

    useEffect(() => {
        fetch('/todos')
            .then((res) => res.json())
            .then(setTodos);

        fetch('/notes')
            .then((res) => res.json())
            .then(setNotes);
    }, []);

    useEffect(() => {
        if (!!todos && todos.filter((d) => d.is_completed).length == todos.length) {
            confetti();
        }
    }, [todos]);

    const onAddTodo = (todo: Todo) => {
        setTodos((arr) => [...arr, todo]);
    };

    const onChangeTodo = (todo: Todo) => {
        setTodos((arr) =>
            arr.map((t) => {
                return t.id === todo.id ? todo : t;
            })
        );
    };

    const onAddNote = (note: Note) => {
        setNotes((arr) => [...arr, note]);
    };

    const onChangeNote = (note: Note) => {
        setNotes((arr) =>
            arr.map((t) => {
                return t.id === note.id ? note : t;
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
                    {/* <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span className="tab-tooltip-text">My Reminders</span>
                    </div> */}
                </div>
                <div className="tab-content-area">
                    {isTodosTab && todos ? (
                        <>
                            <div className="todos">
                                {todos.map((todo) => {
                                    return <ToDoItem key={todo.id} todo={todo} onChange={onChangeTodo} />;
                                })}
                                <div className="tab-meta">
                                    {todos.filter((d) => d.is_completed).length} of {todos.length} completed
                                </div>
                            </div>
                            <AddToDoForm onAdd={onAddTodo} />
                        </>
                    ) : notes ? (
                        <>
                            <div className="notes">
                                {notes.map((note) => {
                                    return <NoteItem key={note.id} note={note} onChange={onChangeNote} />;
                                })}
                            </div>
                            <AddNoteForm onAdd={onAddNote} />
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

const noteData: Note[] = [
    {
        id: 'abc',
        user_id: 'abc',
        content: 'This is a note',
        created_at: 'abc',
    },
    {
        id: '123',
        user_id: 'abc',
        content: 'This is another note',
        created_at: 'abc',
    },
    {
        id: '999',
        user_id: 'abc',
        content: 'This is a final note',
        created_at: 'abc',
    },
];
