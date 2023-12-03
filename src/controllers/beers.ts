import { Request, Response } from "express";
import prisma from "../../prisma/client";

export async function getBeers(req: Request, res: Response) {
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
    console.log(error);
    res.status(500).send("Something went wrong. Check your request query.");
  }
}
