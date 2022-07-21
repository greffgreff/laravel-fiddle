import React from 'react';
import Draggable from 'react-draggable';
import { Note } from '../types';
import NoteBlock from './NoteBlock';
import '../../css/draggableNoteBlock.css';

export default function DraggableNoteBlock({ note }: { note: Note }) {
    return (
        <Draggable>
            <div className="draggable-note-block-container">
                <NoteBlock note={note} />
            </div>
        </Draggable>
    );
}
