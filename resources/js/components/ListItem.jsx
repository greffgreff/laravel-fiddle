import { useState } from "react";
import "../../css/listItem.css";

export default function ListItem({ title, checked = false }) {
    const [complete, isComplete] = useState(checked);

    return (
        <div
            className="todo-item-container"
            onClick={() => isComplete(!complete)}
        >
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={complete}
                onChange={() => null} // remove warning
            />
            <div
                className="todo-item-title"
                style={{ textDecoration: complete ? "line-through" : null }}
            >
                {title}
            </div>
        </div>
    );
}
