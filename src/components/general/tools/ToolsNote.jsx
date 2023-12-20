import React from 'react'
import s from './ToolsNote.module.css'
import { useDispatch } from 'react-redux';


const ToolsNote = ({ note }) => {
    const dispatch = useDispatch();

    const deleteNote = (id) => {
        dispatch({ type: "DELETE_NOTE", payload: id })
    }

    return (
        <div className={s.tools}>
            <div><img src="/img/edit.png" alt="" /></div>
            <div><img src="img/archive.png" alt="" /></div>
            <div onClick={() => deleteNote(note.id)}><img src="/img/delete.png" alt="" /></div>
        </div>
    );
}

export default ToolsNote;