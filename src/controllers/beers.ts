import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma/client";

export async function getBeers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const filters = req.query;

  const { minPrice, maxPrice, minRating } = filters;

  // Remove used properties
  delete filters.minPrice;
  delete filters.maxPrice;
  delete filters.minRating;

  const where = {
    price: {
      gt: Number(minPrice) || undefined,
      lt: Number(maxPrice) || undefined,
    },
    rating: {
      gt: Number(minRating) || undefined,
    },
    ...filters,
  };

  try {
    const products = await prisma.beer.findMany({
      where,
    });

    res.send(products);
  } catch (error) {
    next(error);
  }
}

export async function getBeerById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const beer = await prisma.beer.findUnique({ where: { id: Number(id) } });

    if (!beer)
      return res.status(404).send("Beer with given id does not exist.");

    res.send(beer);
  } catch (error) {
    next(error);
  }
}
