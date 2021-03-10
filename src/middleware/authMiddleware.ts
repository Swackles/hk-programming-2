import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { Users } from "./../services";

async function authenticate(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers);
    jwt.verify(req.headers.authorization, 'TempJWTSecret', (err, decoded: { id: number, role: number }) => {
      if (decoded == undefined) return res.status(403).send();
      
      res.locals.user = new Users({ id: decoded.id});
      next();
    })
}

async function emailPasswordPresent(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send({ CODE: 'MISSING_EMAIL_OR_PASSWORD' , message: 'email or password is missing' });

  next();
}

export { authenticate, emailPasswordPresent };