import React from 'react'
import css from "./Main.module.css";

import { Route, Routes } from 'react-router-dom';
import GeneralPage from './generalPage/GeneralPage';
import ArchivePage from './archivePage/ArchivePage';

const Main = () => {
    return (
        <main className={css.main}>
            <div className={css.overCont}>
                <Routes>
                    <Route path='/' exact Component={GeneralPage}></Route>
                    <Route path='/archive' Component={ArchivePage}></Route>
                </Routes>
            </div>
        </main>
    );
}

export default Main;