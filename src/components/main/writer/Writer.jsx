import React, { useState } from 'react';
import css from "./Writer.module.css"
import CategoryNote from './categoryNote/CategoryNote';



const Writer = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleFocus = () => {
        setIsInputFocused(true);
    };

    // const handleBlur = () => {
    //     setIsInputFocused(false);
    // };

    return (
        <div className={css.contNote} >
            <form action="">
                <div>
                    <input className={css.note} type="text" name="title" id="" placeholder='Введіть заголовок' />
                </div>
                <div>
                    <textarea className={css.textarea} name="content" id="" placeholder='Введіть замітку...'></textarea>
                </div>
                <div>
                    <CategoryNote></CategoryNote>
                </div>
            </form>
        </div>
    );
};



export default Writer;