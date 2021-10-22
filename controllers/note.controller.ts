import express, { Request, Response } from 'express';
import noteService from '../services/note.service';

class NoteController {
    async listNotes(req: Request, res: Response) {
        const notes = await noteService.list(10, 0);
        res.status(200).send(notes)
    }
    async createNote(req: Request, res: Response) {
        console.log('Got body:', req.body);
        const noteId = await noteService.create(req.body);
        res.status(201).send({id: noteId})
    }
    async putNote(req: Request, res: Response) {

    }
    async deleteNote(req: Request, res: Response) {
    }
}

export default new NoteController()