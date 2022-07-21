import React from 'react';
import '../../css/noteBlock.css';
import { Note } from '../types';

export default function NoteBlock({ note, readonly = false }: { note: Note; readonly?: boolean }) {
    return (
        <div className="note-block">
            <textarea defaultValue={note.content} readOnly={readonly} />
        </div>
    );
}
