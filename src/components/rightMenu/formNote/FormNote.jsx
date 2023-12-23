import React, { useEffect, useMemo, useState } from 'react'
import s from './FormNote.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Note from '../../../helper';

const FormNote = () => {
    const { id } = useParams();
    const general = useSelector(state => state.general);
    const currentPath = window.location.pathname;
    const dispatch = useDispatch();

    const defaultFormData = useMemo(() => ({
        title: '',
        category: '',
        content: ''
    }), []);
    
    const [formData, setFormData] = useState(defaultFormData);

    useEffect(() => {
        if (currentPath.includes('edit')) {
            const currentNote = general[id];
            setFormData({
                title: currentNote.title,
                category: currentNote.category,
                content: currentNote.content
            });
        }
        if (currentPath.includes('add-new')) {
            setFormData(defaultFormData);
        }
    }, [currentPath, general, id, defaultFormData]);



    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (currentPath.includes('add-new')) {
            const newNote = new Note(formData.title, formData.category, formData.content);
            dispatch({ type: "ADD_NOTE", payload: newNote })
        } else if (currentPath.includes("edit")) {
            dispatch({ type: "EDIT_NOTE", payload: { id: id, title: formData.title, category: formData.category, content: formData.content } })
        }
    }



    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isFormValid = () => {
        return formData.title !== '' && formData.category !== '' && formData.content !== '';
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
                Name: <input type="text" name='title' value={formData.title} onChange={handleChange} />
            </div>
            <div>
                Category:
                <select name="category" id="" onChange={handleChange} value={formData.category}>
                    <option value=""></option>
                    <option value="Task">Task</option>
                    <option value="Idea">Idea</option>
                    <option value="Thought">Thought</option>
                </select>
            </div>
            <div className={s.content}>
                Content:
                <div>
                    <textarea name="content" id="" onChange={handleChange} value={formData.content}>

                    </textarea>
                </div>
            </div>
            <div className={s.sub}>
                <input disabled={!isFormValid()} type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default FormNote;