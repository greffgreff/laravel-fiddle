import {
    faList,
    faNoteSticky,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../../css/tasks.css";
import ListItem from "./ListItem";

export default function Tasks() {
    const [todos, showTodos] = useState(true);

    return (
        <div className="tasks-container">
            <div className="tabs-container">
                <div className="tabs">
                    <div onClick={() => showTodos(true)}>
                        <FontAwesomeIcon icon={faList} />
                        <div>To Dos</div>
                    </div>
                    <div onClick={() => showTodos(false)}>
                        <FontAwesomeIcon icon={faNoteSticky} />
                        <div>To Dos</div>
                    </div>
                </div>
                <div className="tab-content-area">
                    {todos ? (
                        <div className="todos">
                            <ListItem
                                key="1"
                                title="Task 1, this is intented to be a very long task with a lot of text"
                                checked
                            />
                            <ListItem key="2" title="Task 2" checked />
                            <ListItem key="3" title="Task 3" checked />
                            <ListItem key="4" title="Task 4" />
                            <ListItem key="5" title="Task 5" />
                        </div>
                    ) : (
                        <div className="notes">
                            Notes here...
                        </div>
                    )}
                </div>
            </div>
            <button className="add-task-btn">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}
