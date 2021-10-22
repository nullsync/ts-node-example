import BaseModel from '../models/base.model';
import Note from '../models/note.model';
import ServiceInterface from './service.interface';
import DataSource from '../shared/datasource';

class NoteService implements ServiceInterface  {
    create(note: Note): Promise<number> {
        console.log(note);
        DataSource.addNote(note);
        return Promise.resolve(note.id);
    }
    update(model: BaseModel): Promise<BaseModel> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<BaseModel> {
        throw new Error('Method not implemented.');
    }
    list(limit: number, page: number): Promise<Array<BaseModel>> {
        return Promise.resolve(DataSource.fetchAllNotes())
    }
    save(model: BaseModel): Promise<BaseModel> {
        throw new Error('Method not implemented.');
    }
}

export default new NoteService()