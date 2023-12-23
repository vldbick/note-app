import React from 'react'
import { useSelector } from 'react-redux';
import Note from '../note/Note';

const ActiveNotes = () => {
    const general = useSelector(state => state.general);
    return (
        <div>
            {general.map((el) => {
                return <Note key={el.id} obj={el} targetArray="general"></Note>
            })}
        </div>
    );
}

export default ActiveNotes;