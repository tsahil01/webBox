/*
  Warnings:

  - The `status` column on the `Container` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CREATED', 'STARTED');

-- AlterTable
ALTER TABLE "Container" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
