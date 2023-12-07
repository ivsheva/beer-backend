/*
  Warnings:

  - You are about to drop the column `genre` on the `beer` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `beer` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `beer` DROP COLUMN `genre`,
    ADD COLUMN `type` VARCHAR(191) NOT NULL DEFAULT 'main',
    MODIFY `price` DOUBLE NOT NULL;
