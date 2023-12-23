import React from 'react'
import s from './Summary.module.css'
import SummaryNote from './summaryNote/SummaryNote';

const Summary = () => {
    
    return (
        <div className={s.summary}>
            <div className={s.titleTable}>Summary Table</div>
            <div className={s.genTable}>
                <div className={s.tableHead}>
                    <div className={s.category}>Note Category</div>
                    <div>Active</div>
                    <div>Archived</div>
                    <div></div>
                </div>
                <div className={s.tableBody}>
                    <SummaryNote category='Task'></SummaryNote>
                    <SummaryNote category='Idea'></SummaryNote>
                    <SummaryNote category='Thought'></SummaryNote>
                </div>



            </div>
        </div>
    );
}

export default Summary;