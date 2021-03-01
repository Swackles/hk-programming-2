import express, { Request, Response } from 'express';
import { findRoom } from './../middleware/findMiddleware';
import { Rooms } from './../services/';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send(Rooms.findAll());
})

router.get('/:id([0-9]+)', findRoom, async (req: Request, res: Response) => {
  const { id } = req.params;

  res.send(Rooms.find(id))
})

router.delete('/:id([0-9]+)', findRoom, async (req: Request, res: Response) => {
  const { room } = res.locals;

  res.send(room.delete())
})

router.put('/:id([0-9]+)', findRoom, async (req: Request, res: Response) => {
  let { room } = res.locals;

  for (const column of Rooms.Columns.filter(x => x != 'id')) {
    (<any>room)[column] = (<any>req.body)[column]
  }

  res.send(room.save())
})

router.post('/', async (req: Request, res: Response) => {
  let room = new Rooms(req.body);
  res.send(room.save());
})

export default router;
