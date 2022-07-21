import { useState } from 'react';
import '../../css/noteItem.css';
import { Note } from '../types';
import React from 'react';
import NoteBlock from './NoteBlock';

export default function NoteItem({ note }: { note: Note }) {
    const [isNoteShown, showNote] = useState(false);

    return (
        <>
            <div className="note-item-container" onClick={() => showNote(!note)}>
                <NoteBlock note={note} readonly />
            </div>

            {isNoteShown ? <NoteBlock note={note} /> : null}
        </>
    );
}
