import { faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import '../../css/addNoteForm.css';
import { Note } from '../types';
import DraggableNoteBlock from './DraggableNoteBlock';

export default function AddNoteForm({ onAdd }: { onAdd?: (note: Note) => void }) {
    const [form, showForm] = useState(false);

    return (
        <>
            <button className="add-note-btn" onClick={() => showForm(!form)}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {form ? <DraggableNoteBlock onChange={onAdd} /> : null}
        </>
    );
}
