import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import '../../css/ToDoItem.css';

export default function ToDoItem({ title, checked = false, dateCreated }) {
    const [complete, isComplete] = useState(checked);

    const handleComplete = () => {
        isComplete(!complete);
        if (!complete) {
            confetti();
        }
    };

    return (
        <div className="todo-item-container" onClick={handleComplete}>
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={complete}
                onChange={() => null} // remove warning
            />
            <div className="todo-item-title" style={{ opacity: complete ? 0.2 : 1 }}>
                {title}
            </div>
            {dateCreated ? (
                <span class="tooltip-text">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Added {dateCreated}
                </span>
            ) : null}
        </div>
    );
}

// textDecoration: complete ? 'line-through' : null
