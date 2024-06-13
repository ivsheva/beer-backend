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

// execute populate
populate()
  .then((res) => console.log(res))
  .catch((error) => {
    console.error("Error populating database:", error);
    process.exit(1); // Exit with error code
  });

export default populate;
