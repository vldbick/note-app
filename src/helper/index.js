
class Note {
    static idCounter = 0;

    constructor(title, category, content) {
        this.id = Note.idCounter++;
        this.title = title;
        this.category = category;
        this.content = content;
        this.created = this.setCreatedTime();
        this.dates = this.findDatesInString(content);
    }

    findDatesInString(inputString) {
        const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
        const matches = inputString.match(dateRegex);

        return matches || [];
    }

    setCreatedTime() {
        const currentDate = new Date();
        return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    }

}



export default Note;