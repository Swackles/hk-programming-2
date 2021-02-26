import express, { Request, Response } from 'express';

const router = express.Router();

interface BasicTable {
  id: number,
  name: string
}

interface Timetable {
  id: number,
  comment: string,
  roomId: number,
  lecturerId: number,
  subjectId: number,
  coursesId: number
}

const timetables: Timetable[] = [
  {
    id: 1,
    comment: 'Kontaktõpe individuaalse graafiku järgi',
    roomId: 1,
    lecturerId: 1,
    subjectId: 1,
    coursesId: 1
  },
  {
    id: 2,
    comment: 'Kontaktõpe individuaalse graafiku järgi',
    roomId: 2,
    lecturerId: 2,
    subjectId: 2,
    coursesId: 2
  },
  {
    id: 3,
    comment: 'Zoom',
    roomId: 3,
    lecturerId: 3,
    subjectId: 3,
    coursesId: 3
  },
]

router.get('/', async (req: Request, res: Response) => {
  res.send(timetables);
})

router.get('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.send(timetables.find(timetable => timetable.id == parseInt(id)))
})

router.delete('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(timetables.find(timetable => timetable.id == parseInt(id)))
})

router.put('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(timetables.find(timetable => timetable.id == parseInt(id)))
})

router.post('/', async (req: Request, res: Response) => {
  const { comment, roomId, lecturerId, subjectId, coursesId } = req.body;

  res.send({ id: timetables.length, comment: comment, roomId: roomId, lecturerId: lecturerId, subjectId: subjectId, coursesId: coursesId })
})

export default router;
