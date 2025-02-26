/*
  Warnings:

  - Changed the type of `assignedBy` on the `PosInPansion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PosInPansion" DROP COLUMN "assignedBy",
ADD COLUMN     "assignedBy" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PosInPansion" ADD CONSTRAINT "PosInPansion_assignedBy_fkey" FOREIGN KEY ("assignedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
