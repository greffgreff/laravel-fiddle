import '../../css/noteBlock.css'

export default function NoteBlock({ text, readOnly = false }) {
    return (
        <div className="note-block">
            <textarea defaultValue={text} readOnly={readOnly} />
        </div>
    )
}
