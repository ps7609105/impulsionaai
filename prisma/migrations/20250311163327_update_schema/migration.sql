/*
  Warnings:

  - You are about to drop the column `password` on the `panels` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `passwordHash` to the `panels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordHash` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "panels" DROP COLUMN "password",
ADD COLUMN     "passwordHash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
ADD COLUMN     "passwordHash" TEXT NOT NULL;
