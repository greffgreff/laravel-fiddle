import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import '../../css/listItem.css'

export default function ListItem({ title, checked = false, dateCreated = new Date() }) {
    const [complete, isComplete] = useState(checked)

    return (
        <div className="todo-item-container" onClick={() => isComplete(!complete)}>
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={complete}
                onChange={() => null} // remove warning
            />
            <div className="todo-item-title" style={{ opacity: complete ? 0.2 : 1,  }}>
                {title}
            </div>
            <span class="tooltip-text">
                <FontAwesomeIcon icon={faInfoCircle} />
                Added {dateCreated.toLocaleDateString() + ' ' + dateCreated.toLocaleTimeString()}
            </span>
        </div>
    )
}

// textDecoration: complete ? 'line-through' : null