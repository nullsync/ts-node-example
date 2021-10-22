import express, { Request, Response } from 'express';

import noteController from './controllers/note.controller';

const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app
    .route('/')
    .get((req: Request, res: Response) => {
        res.send('This is root');
    });

app
    .route('/hello')
    .get((req: Request, res: Response) => {
        res.send('Hello...');
    });

app
    .route('/notes')
    .get(noteController.listNotes)
    .post(noteController.createNote);

app
    .route('/notes/:noteId')
    .put(noteController.putNote)
    .delete(noteController.deleteNote);

app.listen(port, () => {
    console.log("Start...");
});
