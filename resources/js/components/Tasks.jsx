import {
    faList,
    faNoteSticky,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/tasks.css";
import ListItem from "./ListItem";

export default function Tasks() {
    return (
        <div className="tasks-container">
            <div className="tabs-container">
                <div className="tabs">
                    <div>
                        <FontAwesomeIcon icon={faList} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faNoteSticky} />
                    </div>
                </div>
                <div className="tab-content-area">
                    <div className="todos">
                        <ListItem key="1" title="Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 " checked />
                        <ListItem key="2" title="Task 2" checked />
                        <ListItem key="3" title="Task 3" checked />
                        <ListItem key="4" title="Task 4" />
                        <ListItem key="5" title="Task 5" />
                    </div>
                </div>
            </div>
            <button className="add-task-btn">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}
