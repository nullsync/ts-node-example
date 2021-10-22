import Note from "../models/note.model"

class DataSource {
    private static dataStore: Array<Note> = [
        new Note(1, "Note 1", "Hello"),
        new Note(2, "Note 2", "Hello"),
        new Note(3, "Note 3", "Hello"),
        new Note(4, "Note 4", "Hello"),
        new Note(5, "Note 5", "Hello")
    ]
    static fetchAllNotes(): Array<Note> {
        return this.dataStore
    }

    static addNote(note: Note): number {
        const idx = this.dataStore.length + 1;
        note.id = idx;
        this.dataStore.push(note);
        return idx
    }

    static getNote(id: number): Note {
        return this.dataStore.find(i => i.id == id) as Note;
    }

    static deleteNote(id: number) {
        this.dataStore.forEach((item, index) => {
            if (item.id == id) this.dataStore.splice(index, 1);
        });
    }
}

export default DataSource