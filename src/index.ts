import express, { Request, Response } from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

/* Controllers */
import { rooms, lecturers, subjects, courses, timetables, auth }  from './controllers/';

/* Services */
import { Courses, Lecturers, Rooms, Subjects, Timetables, Users } from './services/';

declare module 'express' {
  export interface Response {
    locals: {
      course?: Courses,
      lecturer?: Lecturers,
      room?: Rooms,
      subject?: Subjects,
      timetable?: Timetables,
      user?: Users
    }
  }
  export interface Request {
    body: { email?: string, password?: string }
    params: { id?: number }
  }
}

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', auth);
app.use('/rooms', rooms);
app.use('/lecturers', lecturers);
app.use('/subjects', subjects);
app.use('/courses', courses);
app.use('/timetables', timetables);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => { res.status(404).send() });

// error handler
app.use((err: any, req: Request, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'internal server error'
      }
    })
  } else {
    res.status(err.status || 500).send({
      error: err,
      message: err.message
    })
  }
});

app.listen(3000);

export default app;