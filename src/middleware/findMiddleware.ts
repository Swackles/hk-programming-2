import { Request, Response, NextFunction } from 'express';
import { Courses, Lecturers, Rooms, Subjects, Timetables } from './../services/';


async function findCourse(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  res.locals.course = new Courses({
    id: 1,
    name: 'RIF1'
  });
  next();
}

async function findLecturer(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  res.locals.lecturer = new Lecturers({
    id: 1,
    name: 'Karl-Erik Hiiemaa'
  });
  next();
}

async function findRoom(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  res.locals.room = new Rooms({
    id: 1,
    name: '301'
  });
  next();
}

async function findSubject(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  res.locals.subject = new Subjects({
    id: 1,
    name: 'Vanatehnika restaureerimine',
    code: 'HKM5037.HK'
  });
  next();
}

async function findTimetable(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  res.locals.timetable = new Timetables({
    id: 1,
    comment: 'Kontaktõpe individuaalse graafiku järgi',
    roomId: 1,
    lecturerId: 1,
    subjectId: 1,
    coursesId: 1
  });
  next();
}

export { findCourse, findLecturer, findRoom, findSubject, findTimetable };
