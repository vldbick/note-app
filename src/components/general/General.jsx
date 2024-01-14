import React from 'react'
import s from './General.module.css';
import { Route, Routes } from 'react-router-dom';
import ActiveNotes from './activeNotes/ActiveNotes';
import ArchiveNotes from './archiveNotes/ArchiveNotes';

const General = () => {

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
                    <Routes>
                        <Route path="note-app/*" element={<ActiveNotes></ActiveNotes>}>
                        </Route>
                        <Route path="general/*" element={<ActiveNotes></ActiveNotes>}>
                        </Route>
                        <Route  path="archive/*" element={<ArchiveNotes></ArchiveNotes>}>
                        </Route>
                    </Routes>
                </div>



            </div>
        </div >
    );
}

export default General;