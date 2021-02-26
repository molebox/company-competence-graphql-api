/*
  Warnings:

  - You are about to drop the column `companyId` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Trade` table. All the data in the column will be lost.
  - Added the required column `tradeId` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Trade" DROP CONSTRAINT "Trade_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "tradeId" INTEGER NOT NULL,
ADD COLUMN     "roleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "Trade" DROP COLUMN "companyId";

-- AddForeignKey
ALTER TABLE "Company" ADD FOREIGN KEY ("tradeId") REFERENCES "Trade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
