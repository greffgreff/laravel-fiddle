import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Draggable from 'react-draggable'
import '../../css/addForm.css'

export default function AddForm() {
    const [form, showForm] = useState(true)

    return (
        <>
            <button className="add-task-btn" onClick={() => showForm(!form)}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {form ? (
                <Draggable>
                    <div className="form-container">
                        <button className="form-close-btn" onClick={() => showForm(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </Draggable>
            ) : null}
        </>
    )
}
