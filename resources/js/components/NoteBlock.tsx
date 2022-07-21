import React from 'react';
import { Note } from '../types';
import '../../css/noteBlock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';

export default function NoteBlock({ note, readonly = false, onChange, onHide }: { note?: Note; readonly?: boolean; onChange?: (note: Note) => void; onHide?: () => void }) {
    const [isHidden, hideNote] = useState<boolean>(false);
    const contentInput = useRef(null);

    const handleUpdate = () => {
        if (!contentInput.current.value) {
            return;
        }

        const noteToUpdate = {
            id: note.id,
            content: contentInput.current.value,
        };

        axios
            .put('/updateNoteContent', noteToUpdate)
            .then((res) => onChange(res.data))
            .catch(console.log);

        hideNote(true);
        onHide(true);
    };

    const handleDelete = () => {
        hideNote(true); // testing
        onHide();
    };

    return (
        <div className="note-block-container" style={{ display: isHidden ? 'none' : '' }}>
            {!readonly ? (
                <div className="note-block-btns">
                    <button className="note-block-btn" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <button className="note-block-btn" onClick={handleUpdate}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            ) : null}
            <textarea className="note-block-content" ref={contentInput} placeholder="Fishing requires in incredible amount of fucking patience..." defaultValue={note?.content ?? ''} readOnly={readonly} />
        </div>
    );
}
