import { Request, Response } from "express";
import prisma from "../../prisma/client";

export async function getBeers(req: Request, res: Response) {
  const filters = req.query;

  try {
    const products = await prisma.beer.findMany({
      where: {
        ...filters,
      },
    });

    res.send(products);
  } catch (error) {
    res.status(500).send("Something went wrong. Check your request query.");
  }
}
