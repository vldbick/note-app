import React from 'react'
import s from './RightMenu.module.css'
import SelectTable from './rightMenuBut/selectTable/SelectTable';
import AddNote from './rightMenuBut/addNote/AddNote';
import { Route, Routes } from 'react-router-dom';
import FormNote from './formNote/FormNote';

const RightMenu = () => {
    return (
        <div className={s.right}>
            <div className={s.buttons}>
                <SelectTable></SelectTable>
                <AddNote></AddNote>
            </div>
            <div className='mainPart'>
                <Routes>
                    <Route path='archive/add-new' element={<FormNote />} />
                    <Route path='general/add-new' element={<FormNote />} />
                    <Route path='general/edit/:id' element={<FormNote />} />
                    <Route path='archive/edit/:id' element={<FormNote />} />
                    <Route path='note-app/edit/:id' element={<FormNote />} />
                </Routes>
            </div>
        </div>
    );
}

export default RightMenu;