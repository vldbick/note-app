import React from 'react'
import PointNote from './pointNote/PointNote';
import css from "./TableNotes.module.css"

const arr = [{
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}, {
    id: 1,
    title: "Прочитать книгу",
    content: "Блавлаыdл dfsdfsf  sdfsfsd sdf sdf sdf sdf dsfsd f sdf sdf sdf sdfsdf sdf sdf sd sdfsdf sdf sdfs fsdf sdfважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв dлважфылвалыfff fffffffffff ffffffffff ffffffфжваылв",
    time: '12.04.2020',
    category: "Завдання"

}]

const TableNotes = () => {
    const elements = arr.map((el) => {
        return (
            <PointNote card={el}></PointNote>
        )
    })
    return (
        <div className={css.cards}>
            {elements}
        </div>
    );
}

export default TableNotes;