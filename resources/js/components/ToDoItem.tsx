import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import '../../css/ToDoItem.css';
import axios from 'axios';
import React from 'react';
import { Todo } from '../types';

export default function ToDoItem({ todo, onChange }: { todo: Todo; onChange: (todo: Todo) => void }) {
    const [complete, isComplete] = useState<boolean>(!!todo.is_completed);

    const handleComplete = () => {
        isComplete(!complete);
        const todoToUpdate = {
            id: todo.id,
            status: !complete ? 1 : 0, // ints for future statuses
        };

        axios
            .put('/updateTodoStatus', todoToUpdate)
            .then((res) => onChange(res.data))
            .catch(console.log);
    };

    return (
        <div className="todo-item-container" onClick={handleComplete}>
            <input className="todo-checkbox" type="checkbox" checked={complete} readOnly />
            <span className="checkmark"></span>
            <div className="todo-item-title" style={{ opacity: complete ? 0.2 : 1 }}>
                {todo.title}
            </div>
            {todo.created_at ? (
                <span className="tooltip-text">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Added {todo.created_at}
                </span>
            ) : null}
        </div>
    );
}

// textDecoration: complete ? 'line-through' : null
