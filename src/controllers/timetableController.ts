import express, { Request, Response } from 'express';
import { authenticate } from './../middleware/authMiddleware';
import { findTimetable } from './../middleware/findMiddleware';
import { Timetables } from './../services/';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send(Timetables.findAll());
})

router.get('/:id([0-9]+)', findTimetable, async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(Timetables.find(id))
})

router.delete('/:id([0-9]+)', authenticate, findTimetable, async (req: Request, res: Response) => {
  const { timetable } = res.locals;

  res.send(timetable.delete())
})

router.put('/:id([0-9]+)', authenticate, findTimetable, async (req: Request, res: Response) => {
  let { timetable } = res.locals;

  for (const column of Timetables.Columns.filter(x => x != 'id')) {
    (<any>timetable)[column] = (<any>req.body)[column]
  }

  res.send(timetable.save())
})

router.post('/', authenticate, async (req: Request, res: Response) => {
  let timetable = new Timetables(req.body);
  res.send(timetable.save());
})

export default router;
