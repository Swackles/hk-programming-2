import express, { Request, Response } from 'express';

const router = express.Router();

interface Lecturer {
  id: number,
  name: string
}

const lecturers: Lecturer[] = [
  {
    id: 1,
    name: 'Karl-Erik Hiiemaa'
  },
  {
    id: 2,
    name: 'Raivo Hein'
  },
  {
    id: 3,
    name: 'Eero Johannes'
  }
]

router.get('/', async (req: Request, res: Response) => {
  res.send(lecturers);
})

router.get('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.send(lecturers.find(lecturer => lecturer.id == parseInt(id)))
})

router.delete('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(lecturers.find(lecturer => lecturer.id == parseInt(id)))
})

router.put('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(lecturers.find(lecturer => lecturer.id == parseInt(id)))
})

router.post('/', async (req: Request, res: Response) => {
  const { name } = req.body;

  res.send({ id: lecturers.length, name: name })
})

export default router;
