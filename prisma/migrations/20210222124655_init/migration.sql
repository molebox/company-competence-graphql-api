/*
  Warnings:

  - You are about to drop the column `tradeId` on the `Company` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Industry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_industryId_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_tradeId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "tradeId";

-- AlterTable
ALTER TABLE "Industry" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_CompanyToTrade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToTrade_AB_unique" ON "_CompanyToTrade"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToTrade_B_index" ON "_CompanyToTrade"("B");

-- AddForeignKey
ALTER TABLE "_CompanyToTrade" ADD FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToTrade" ADD FOREIGN KEY ("B") REFERENCES "Trade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Industry" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
