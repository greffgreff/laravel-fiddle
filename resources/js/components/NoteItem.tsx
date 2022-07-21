import React from 'react';
import { Note } from '../types';
import NoteBlock from './NoteBlock';
import '../../css/noteItem.css';
import DraggableNoteBlock from './DraggableNoteBlock';
import { useState } from 'react';

export default function NoteItem({ note, onChange }: { note: Note; onChange?: (note: Note) => void }) {
    const [isNoteShown, showNote] = useState<boolean>(false);

    return (
        <>
            <div className="note-item-container" onClick={() => showNote(!isNoteShown)}>
                <NoteBlock note={note} readonly />
            </div>

            {isNoteShown ? <DraggableNoteBlock note={note} onChange={(note) => onChange(note)} onHide={() => showNote(false)} /> : null}
        </>
    );
}
