-- CreateTable
CREATE TABLE "Beer" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "oldPrice" INTEGER,
    "price" DOUBLE PRECISION NOT NULL,
    "description" VARCHAR(255),
    "rating" INTEGER NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "type" TEXT NOT NULL DEFAULT 'main',
    "tag" TEXT NOT NULL DEFAULT 'product',
    "isPopular" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);
