import React from 'react'
import s from './General.module.css';
import { useSelector } from 'react-redux';
import Note from './note/Note';

const General = () => {
    const general = useSelector(state => state.general);


    return (
        <div className={s.main}>
            <div className={s.titleTable}>My Tasks</div>
            <div className={s.genTable}>
                <div className={s.tableHead}>
                    <div>Name</div>
                    <div>Created</div>
                    <div>Category</div>
                    <div className={s.contentData}>Content</div>
                    <div>Dates</div>
                    <div>Tools</div>
                </div>
                <div className={s.tableBody}>
                    {general.map((el) => {
                        return <Note key={el.id} obj={el}></Note>
                    })}
                </div>



            </div>
        </div >
    );
}

export default General;