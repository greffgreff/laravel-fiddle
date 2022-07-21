import React from 'react';
import { Note } from '../types';
import '../../css/noteBlock.css';

export default function NoteBlock({ note, readonly = false }: { note: Note; readonly?: boolean }) {
    return (
        <div className="note-block-container">
            <textarea defaultValue={note.content} readOnly={readonly} />
        </div>
    );
}
