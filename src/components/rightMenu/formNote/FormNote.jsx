import React, { useState } from 'react'
import s from './FormNote.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const FormNote = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: ''
    })

    const state = useSelector(state => state)


    const handleSubmit = (ev) => {
        ev.preventDefault();
        const currentPath = window.location.pathname;
        if (currentPath.includes('add-new')) {
            // думаю нужно здесь создавать новый обьект и уже от сюда его прокидывать в диспач
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
                Name: <input type="text" name='title' onChange={handleChange}/>
            </div>
            <div>
                Category:
                <select name="category" id="" onChange={handleChange}>
                    <option value=""></option>
                    <option value="task">Task</option>
                    <option value="idea">Idea</option>
                    <option value="thought">Thought</option>
                </select>
            </div>
            <div className={s.content}>
                Content:
                <div>
                    <textarea name="content" id="" onChange={handleChange}>

                    </textarea>
                </div>
            </div>
            <div className={s.sub}>
                <input disabled={!isFormValid()} type="submit" value="Submit"/>
            </div>
        </form>
    );
}

export default FormNote;