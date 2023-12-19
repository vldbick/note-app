import React, { useState } from 'react';
import css from "./CategoryNote.module.css"

const category = [
    {
        id: 'task',
        label: "завдання"
    },
    {
        id: 'thought',
        label: "думки"
    },
    {
        id: 'idea',
        label: "ідея"
    }
]

const CategoryNote = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };
    const categoryArr = category.map((el) => {
        return (
            <div className={css.flexElem}>
                <label for={el.id} className={selectedOption === el.id ? css.activeLabel : css.defoltLabel}>{el.label.toUpperCase()}</label>
                <input type="radio" id={el.id} name="options" onChange={handleOptionChange} />
            </div>
        )
    })
    
    return (
        <div className={css.contCat}>
            {categoryArr}
        </div>
    );
}

export default CategoryNote;

