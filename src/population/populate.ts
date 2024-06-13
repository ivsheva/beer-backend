import prisma from "../../prisma/client";
import beers from "./beers";

async function populate() {
  const existingData = await prisma.beer.findMany();

  if (existingData.length > 0) return "Data is already populated";

  await prisma.beer.createMany({
    data: beers,
  });

  return "Database is populated with beer data!";
}

export default populate;
