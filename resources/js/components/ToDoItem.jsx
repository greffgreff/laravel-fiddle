import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import '../../css/ToDoItem.css';

export default function ToDoItem({ id, title, checked = false, dateCreated, onChange }) {
    const [complete, isComplete] = useState(checked);

    const handleComplete = () => {
        isComplete(!complete);
        const todoToUpdate = {
            id: id,
            status: !complete ? 1 : 0,
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
                {title}
            </div>
            {dateCreated ? (
                <span className="tooltip-text">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Added {dateCreated}
                </span>
            ) : null}
        </div>
    );
}

// textDecoration: complete ? 'line-through' : null
