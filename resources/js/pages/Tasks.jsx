import { faCalendarDay, faList, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import '../../css/tasks.css'
import AddToDoForm from '../components/AddToDoForm'
import ListItem from '../components/ListItem'
import NoteItem from '../components/NoteItem'

export default function Tasks() {
    const [todos, showTodos] = useState(true)

    return (
        <div className="tasks-container">
            <div className="tabs-container">
                <div className="tabs">
                    <div onClick={() => showTodos(true)}>
                        <FontAwesomeIcon icon={faList} />
                        <span class="tab-tooltip-text">My To Dos</span>
                    </div>
                    <div onClick={() => showTodos(false)}>
                        <FontAwesomeIcon icon={faNoteSticky} />
                        <span class="tab-tooltip-text">My Notes</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span class="tab-tooltip-text">My Reminders</span>
                    </div>
                </div>
                <div className="tab-content-area">
                    {todos ? (
                        <div className="todos">
                            <ListItem key="1" title="Task 1, this is intented to be a very long task with a lot of text" checked />
                            <ListItem key="2" title="Task 2" checked />
                            <ListItem key="3" title="Task 3" checked />
                            <ListItem key="4" title="Task 4" />
                            <ListItem key="5" title="Task 5" />
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
    )
}
