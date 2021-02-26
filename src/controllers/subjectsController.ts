import express, { Request, Response } from 'express';

const router = express.Router();

interface Subject {
  id: number,
  name: string,
  code: string
}

const subjects: Subject[] = [
  {
    id: 1,
    name: 'Vanatehnika restaureerimine',
    code: 'HKM5037.HK'
  },
  {
    id: 2,
    name: 'Meistritöökoja praktika II',
    code: 'HKM5095.HK'
  },
  {
    id: 3,
    name: 'Autoriõigus ja patent',
    code: 'HKM5046.HK'
  }
]

router.get('/', async (req: Request, res: Response) => {
  res.send(subjects);
})

router.get('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.send(subjects.find(subject => subject.id == parseInt(id)))
})

router.delete('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(subjects.find(subject => subject.id == parseInt(id)))
})

router.put('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(subjects.find(subject => subject.id == parseInt(id)))
})

router.post('/', async (req: Request, res: Response) => {
  const { name, code } = req.body;

  res.send({ id: subjects.length, name: name, code: code })
})

export default router;
