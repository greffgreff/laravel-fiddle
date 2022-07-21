import React from 'react';
import Draggable from 'react-draggable';
import { Note } from '../types';
import NoteBlock from './NoteBlock';
import '../../css/draggableNoteBlock.css';

export default function DraggableNoteBlock({ note, onHide }: { note?: Note; onHide?: () => void }) {
    return (
        <Draggable>
            <div className="draggable-note-block-container">
                <NoteBlock note={note} onHide={onHide} />
            </div>
        </Draggable>
    );
}
