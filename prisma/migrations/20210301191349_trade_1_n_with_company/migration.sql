/*
  Warnings:

  - You are about to drop the column `companyId` on the `Trade` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trade" DROP CONSTRAINT "Trade_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "tradeId" INTEGER;

-- AlterTable
ALTER TABLE "Trade" DROP COLUMN "companyId";

-- AddForeignKey
ALTER TABLE "Company" ADD FOREIGN KEY ("tradeId") REFERENCES "Trade"("id") ON DELETE SET NULL ON UPDATE CASCADE;
