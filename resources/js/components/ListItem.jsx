import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import '../../css/listItem.css'

export default function ListItem({ title, checked = false, dateCreated = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() }) {
    const [complete, isComplete] = useState(checked)

    return (
        <div className="todo-item-container" onClick={() => isComplete(!complete)}>
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={complete}
                onChange={() => null} // remove warning
            />
            <div className="todo-item-title" style={{ textDecoration: complete ? 'line-through' : null }}>
                {title}
            </div>
            <span class="tooltip-text">
                <FontAwesomeIcon icon={faInfoCircle} />
                Added {dateCreated}
            </span>
        </div>
    )
}
