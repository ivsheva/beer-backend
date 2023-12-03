/*
  Warnings:

  - Added the required column `genre` to the `Beer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `beer` ADD COLUMN `genre` VARCHAR(191) NOT NULL;
