import express, { Request, Response } from 'express';

const router = express.Router();

interface Course {
  id: number,
  name: string
}

const courses: Course[] = [
  {
    id: 1,
    name: 'RIF1'
  },
  {
    id: 2,
    name: 'RIF2'
  },
  {
    id: 3,
    name: 'RIF3'
  }
]

router.get('/', async (req: Request, res: Response) => {
  res.send(courses);
})

router.get('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.send(courses.find(course => course.id == parseInt(id)))
})

router.delete('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(courses.find(course => course.id == parseInt(id)))
})

router.put('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(courses.find(course => course.id == parseInt(id)))
})

router.post('/', async (req: Request, res: Response) => {
  const { name } = req.body;

  res.send({ id: courses.length, name: name })
})

export default router;
