import express, { Request, Response } from 'express';
import { authenticate } from './../middleware/authMiddleware';
import { findLecturer } from './../middleware/findMiddleware';
import { Lecturers } from './../services/';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send(Lecturers.findAll());
})

router.get('/:id([0-9]+)', findLecturer, async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(Lecturers.find(id))
})

router.delete('/:id([0-9]+)', authenticate, findLecturer, async (req: Request, res: Response) => {
  const { lecturer } = res.locals;

  res.send(lecturer.delete())
})

router.put('/:id([0-9]+)', authenticate, findLecturer, async (req: Request, res: Response) => {
  let { lecturer } = res.locals;

  for (const column of Lecturers.Columns.filter(x => x != 'id')) {
    (<any>lecturer)[column] = (<any>req.body)[column]
  }

  res.send(lecturer.save())
})

router.post('/', authenticate, async (req: Request, res: Response) => {
  let lecturer = new Lecturers(req.body);
  res.send(lecturer.save());
})

export default router;
