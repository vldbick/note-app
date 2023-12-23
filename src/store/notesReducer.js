
import Note from "../helper";

const defaultState = {
    general: [
        new Note("Title 1", "Task", "Content 1 with a date: 12/10/2002"),
        new Note("Title 2", "Idea", "Content 2 with a datпропорпо аывап оывап ывавыа ва ыва ываыв ыа ыва ыаыва ыв аыв ыаыв аыв ыа ыва ыва ыва ыва ываe: 12/10/2002"),
        new Note("Tit", "Thought", "Content 3 with a date: "),
        new Note("le 4", "Category 4", "Content 4 with a date: "),
        new Note("Title 5", "Category 5", "Content 5 with a"),
        new Note("Title 6", "Idea", "Content 6 with a date: 12/10/2002"),
        new Note("Title 7", "Category 7", "Content 7 with a date: 12/10/2002"),
        new Note("le 4", "Category 4", "Content 4 with a date: "),
        new Note("Title 5", "Category 5", "Content 5 with a"),
        new Note("Title 6", "Idea", "Content 6 with a date: 12/10/2002"),
        new Note("Title 7", "Category 7", "Content 7 with a date: 12/10/2002"),
    ],
    archive: [
        new Note("Архив", "Task", "Content 1 with a date: 12/10/2002"),
        new Note("Архив", "Idea", "Content 2 with a datпропорпо аывап оывап ывавыа ва ыва ываыв ыа ыва ыаыва ыв аыв ыаыв аыв ыа ыва ыва ыва ыва ываe: 12/10/2002"),
        new Note("Архив", "Thought", "Content 3 with a date: "),
        new Note("le 4", "Category 4", "Content 4 with a date: "),
    ]
}

function deleteObjectById(arr, id) {

    const indexToRemove = arr.findIndex(item => item.id === id);

    if (indexToRemove !== -1) {
        arr.splice(indexToRemove, 1);
    }

    return arr;
}

function moveObjBetweenArray(parent, target, id) {
    const indexToRemove = parent.findIndex(item => item.id === id);

    if (indexToRemove !== -1) {
        const item = parent.splice(indexToRemove, 1)[0];
        target.push(item)
    }

    return target;
}

export const notesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const { title, category, content } = action.payload;
            const newNote = new Note(title, category, content)
            return { ...state, general: [...state.general, newNote] }
        case "ARCHIVE_NOTE":
            return { ...state, archive: moveObjBetweenArray([...state.general], [...state.archive], action.payload), general: deleteObjectById([...state.general], action.payload) };

        case "EDIT_NOTE":
            return state;
        case "DELETE_NOTE":
            if (action.payload.target === 'general') {
                return { ...state, general: deleteObjectById([...state.general], action.payload.id) };
            } else if (action.payload.target === 'archive') {
                return { ...state, archive: deleteObjectById([...state.archive], action.payload.id) };
            }
            return state;

        case "REMOVE_NOTE":
            return { ...state, general: moveObjBetweenArray([...state.archive], [...state.general], action.payload), archive: deleteObjectById([...state.archive], action.payload) };
        default:
            return state;
    }
}