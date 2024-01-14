import React from 'react'
import s from './SummaryNote.module.css'
import { useSelector } from 'react-redux';

const taskImg = '/note-app/img/task.png';
const ideaImg = '/note-app/img/idea.png';
const thoughtImg = '/note-app/img/personalThought.png'

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


const SummaryNote = ({ category }) => {

    const general = useSelector(state => state.general);
    const archive = useSelector(state => state.archive);

    const lookForNote = (arr, key) => {
        let countMap = 0;
        arr.forEach(obj => {
            const value = obj.category;
            if (value.toLowerCase() === key.toLowerCase()) {
                countMap++
            }
        });

        return countMap;
    }

    return (
        <div className={s.tableNote}>
            <div className={s.titleNote}><span className={s.imgNote}>{chooseImg(category)}</span>{category}</div>
            <div>{lookForNote(general, category)}</div>
            <div>{lookForNote(archive, category)}</div>
            <div></div>
        </div>
    );
}
export default SummaryNote;