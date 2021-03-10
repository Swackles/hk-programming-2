import express, { Request, Response } from 'express';
import { Courses } from './../services/';
import { findCourse } from './../middleware/findMiddleware';
import { authenticate } from './../middleware/authMiddleware';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send(Courses.findAll());
})

router.get('/:id([0-9]+)', findCourse, async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(Courses.find(id))
})

router.delete('/:id([0-9]+)', authenticate, findCourse, async (req: Request, res: Response) => {
  const { course } = res.locals;

  res.send(course.delete())
})

router.put('/:id([0-9]+)', authenticate, findCourse, async (req: Request, res: Response) => {
  let { course } = res.locals;

  for (const column of Courses.Columns.filter(x => x != 'id')) {
    (<any>course)[column] = (<any>req.body)[column]
  }

  res.send(course.save())
})

router.post('/', authenticate, async (req: Request, res: Response) => {
  let course = new Courses(req.body);
  res.send(course.save());
})

export default router;
