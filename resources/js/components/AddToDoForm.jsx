import { faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Draggable from 'react-draggable'
import '../../css/addToDoForm.css'

export default function AddDoToForm() {
    const [form, showForm] = useState(false);

    return (
        <>
            <button className="add-task-btn" onClick={() => showForm(!form)}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {form ? (
                <Draggable>
                    <div className="form-container">
                        <div className="form-container-btns">
                            <button className="form-btn" onClick={() => showForm(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <button className="form-btn" onClick={() => showForm(false)}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                        <textarea className="todo-input" placeholder="Beat the shit out of someone..." />
                    </div>
                </Draggable>
            ) : null}
        </>
    )
}
