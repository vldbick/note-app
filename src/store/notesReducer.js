import Note from "../helper";

const defaultState = {
    general: [
        new Note("Title 1", "Task", "Content 1 with a date: 12/10/2002"),
        new Note("Title 2", "Idea", "Content 2 with a date: 12/10/2002"),
        new Note("Title 3", "Thought", "Content 3 with a date: "),
        new Note("Title 4", "Category 4", "Content 4 with a date: "),
        new Note("Title 5", "Category 5", "Content 5 with a"),
        new Note("Title 6", "Idea", "Content 6 with a date: 12/10/2002"),
        new Note("Title 7", "Category 7", "Content 7 with a date: 12/10/2002"),
    ],
    archive: []
}

function deleteObjectById(arr, id) {

    const indexToRemove = arr.findIndex(item => item.id === id);

    if (indexToRemove !== -1) {
        arr.splice(indexToRemove, 1);
    }

    return arr;
}

export const notesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const { title, category, content } = action.payload;
            const newNote = new Note(title, category, content)
            return { ...state, general: [...state.general, newNote] }
        case "ARCHIVE_NOTE":

            return state;

        case "EDIT_NOTE":
            return state;
        case "DELETE_NOTE":
            return { ...state, general: deleteObjectById([...state.general], action.payload)};

        case "REMOVE_NOTE":
            return state;
        default:
            return state;
    }
}