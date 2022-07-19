import { useState } from 'react'
import '../../css/noteItem.css'
import NoteBlock from './NoteBlock'

export default function NoteItem({ text }) {
    const [note, showNote] = useState(false)

    return (
        <>
            <div className="note-item-container" onClick={() => showNote(!note)}>
                <NoteBlock text={text} readOnly />
            </div>

            {note ? <NoteBlock text={text} /> : null}
        </>
    )
}
