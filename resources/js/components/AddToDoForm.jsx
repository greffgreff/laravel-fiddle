import { faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import '../../css/addToDoForm.css';

export default function AddDoToForm({ onAdd }) {
    const [form, showForm] = useState(false);
    const todo = useRef(null);

    const handlePost = () => {
        showForm(false);

        if (!todo.current.value) {
            return;
        }

        axios
            .post('/saveTodo', { todo: todo.current.value })
            .then((res) => onAdd(res.data))
            .catch((error) => {
                console.log('ERROR:: ', error.response.data);
            });
    };

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
                            <button className="form-btn" onClick={handlePost}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                        <textarea ref={todo} name="todo" className="todo-input" placeholder="Beat the shit out of noah..." />
                    </div>
                </Draggable>
            ) : null}
        </>
    );
}
