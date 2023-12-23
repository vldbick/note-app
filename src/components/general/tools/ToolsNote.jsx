import React from 'react'
import s from './ToolsNote.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ToolsNote = ({ note, targetArray }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteNote = (id) => {
        dispatch({ type: "DELETE_NOTE", payload: id })
    }

    const archiveNote = (id) => {
        dispatch({ type: "ARCHIVE_NOTE", payload: id })
    }

    const removeNote = (id) => {
        dispatch({ type: "REMOVE_NOTE", payload: id })
    }



    const editNote = (id) => {
        navigate(`edit/${id}`);
    }

    return (
        <div className={s.tools}>
            {
                targetArray === 'archive' ?
                    <>
                        <div></div>
                        <div onClick={() => removeNote(note.id)}><img src="/img/refresh.png" alt="" /></div>
                        <div onClick={() => deleteNote({ id: note.id, target: targetArray })}><img src="/img/delete.png" alt="" /></div>
                    </>
                    :
                    <>
                        <div onClick={() => { editNote(note.id) }}><img src="/img/edit.png" alt="" /></div>
                        <div onClick={targetArray === 'archive' ? () => removeNote(note.id) : () => archiveNote(note.id)}><img src="/img/archive.png" alt="" /></div>
                        <div onClick={() => deleteNote({ id: note.id, target: targetArray })}><img src="/img/delete.png" alt="" /></div>
                    </>

            }
        </div>
    );
}

export default ToolsNote;