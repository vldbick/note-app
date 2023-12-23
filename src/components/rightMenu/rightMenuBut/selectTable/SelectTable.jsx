import React from 'react'
import s from './SelectTable.module.css'
import { useNavigate } from 'react-router-dom'



const SelectTable = () => {
    const navigate = useNavigate();

    const changeUrl = (ev) => {
        const selectValue = ev.target.value;
        navigate(`/${selectValue}`);
    }

    return (
        <div>
            <form action="">
                <select name="" id="" className={s.but} onChange={changeUrl}>
                    <option value="general">Active notes</option>
                    <option value="archive">Archive notes</option>
                </select>
            </form>
        </div>
    );
}

export default SelectTable;