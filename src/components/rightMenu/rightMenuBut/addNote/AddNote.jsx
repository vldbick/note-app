import React from 'react'
import s from './AddNote.module.css'
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
    const navigate = useNavigate();

    const addNew = () => {
        const currentPath = window.location.pathname;
        let newPath;
        if (!currentPath.includes('add-new')) {
            if (currentPath.includes('general')) {
                newPath = `general/add-new`
            } else {
                newPath = `archive/add-new`
            }
            navigate(newPath);
        }
    };

    return (
        <div>
            <button className={s.but} onClick={addNew}>
                Add note
            </button>
        </div>
    );
}

export default AddNote;