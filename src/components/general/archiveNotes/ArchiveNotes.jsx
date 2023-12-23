import React from 'react'
import { useSelector } from 'react-redux';
import Note from '../note/Note';

const ArchiveNotes = () => {
    const archive = useSelector(state => state.archive);
    return (
        <div>
            {archive.map((el) => {
                return <Note key={el.id} obj={el} targetArray="archive"></Note>
            })}
        </div>
    );
}

export default ArchiveNotes;