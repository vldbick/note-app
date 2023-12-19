import React from 'react'
import css from './PointNote.module.css';


const PointNote = ({card}) => {

    return (
        <div key={card.id} className={css.card}>
            <div className={css.cardOver}>
                <div className={css.upNote}>
                    <div className={css.title}>{card.title}</div>
                    <div className={css.time}>{card.time}</div>
                </div>
                <div className={css.content}>
                    {card.content}
                </div>
            </div>
            <div className={css.category}>{card.category.toUpperCase()}</div>
        </div>
    );
}

export default PointNote;

// class noteClass {
// 	constructor(id, title, content, time, category) {
// 		this.id = id;
// 		this.title = title;
// 		this.content = content;
// 		this.time = time;
// 		this.category = category
// 	}
// }
