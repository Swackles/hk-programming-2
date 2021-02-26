import express, { Request, Response } from 'express';

const router = express.Router();

interface Room {
  id: number,
  name: string
}

const rooms: Room[] = [
  {
    id: 1,
    name: '301'
  },
  {
    id: 2,
    name: '302'
  },
  {
    id: 3,
    name: '303'
  }
]

router.get('/', async (req: Request, res: Response) => {
  res.send(rooms);
})

router.get('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.send(rooms.find(room => room.id == parseInt(id)))
})

router.delete('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(rooms.find(room => room.id == parseInt(id)))
})

router.put('/:id([0-9]+)', async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(rooms.find(room => room.id == parseInt(id)))
})

router.post('/', async (req: Request, res: Response) => {
  const { name } = req.body;

  res.send({ id: rooms.length, name: name })
})

export default router;
