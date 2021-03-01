import express, { Request, Response } from 'express';
import { findSubject } from './../middleware/findMiddleware';
import { Subjects } from './../services/';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send(Subjects.findAll());
})

router.get('/:id([0-9]+)', findSubject, async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(Subjects.find(id))
})

router.delete('/:id([0-9]+)', findSubject, async (req: Request, res: Response) => {
  const { subject } = res.locals;

  res.send(subject.delete())
})

router.put('/:id([0-9]+)', findSubject, async (req: Request, res: Response) => {
  let { subject } = res.locals;

  for (const column of Subjects.Columns.filter(x => x != 'id')) {
    (<any>subject)[column] = (<any>req.body)[column]
  }

  res.send(subject.save())
})

router.post('/', async (req: Request, res: Response) => {
  let subject = new Subjects(req.body);
  res.send(subject.save());
})

export default router;
