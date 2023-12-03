import { NextFunction, Request, Response } from "express";

export default function error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.message);
  res.status(500).send("Something went wrong. Check your request query.");
}
