import React from 'react'
import s from './Note.module.css'
import ToolsNote from '../tools/ToolsNote';

const taskImg = '/img/task.png';
const ideaImg = '/img/idea.png';
const thoughtImg = '/img/personalThought.png'

function chooseImg(category) {
    let src;
    const cat = category.toLowerCase();
    if (cat === 'task') {
        src = taskImg;
    } else if (cat === 'idea') {
        src = ideaImg;
    } else if (cat === 'thought') {
        src = thoughtImg;
    }
    return <img src={src} alt="" />
}

const Note = ({obj, targetArray}) => {
    return (
        <div className={s.tableNote}>
            <div className={s.titleNote}><span className={s.imgNote}>{chooseImg(obj.category)}</span>{obj.title}</div>
            <div>{obj.created}</div>
            <div>{obj.category}</div>
            <div className={s.contentData}>{obj.content}</div>
            <div>{obj.dates}</div>
            <div><ToolsNote note={obj} targetArray={targetArray}></ToolsNote></div>
        </div>
    );
}
export default Note;