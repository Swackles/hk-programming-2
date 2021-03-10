import express, { Request, Response } from 'express';
import { Users } from './../services/';
import { emailPasswordPresent } from './../middleware/authMiddleware'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', emailPasswordPresent, async (req: Request, res: Response) => {
  let { email, password } = req.body;
  password = await bcrypt.hash(password, 10);

  let user = new Users({ email: email, password: password});

  res.send(user.save())
})

router.post('/login', emailPasswordPresent, async (req: Request, res: Response) => {
  let { email, password } = req.body;

  const user = Users.getUserWithEmail(email);

  if (!await bcrypt.compare(password, user.password)) return res.status(403).send();

  const token = await jwt.sign({ id: user.id, role: user.roleId }, 'TempJWTSecret', { expiresIn: 60 * 60 });
  res.setHeader('authorization', token);
  res.send();
})

export default router;
