/*
  Warnings:

  - You are about to drop the column `roleId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Industry` table. All the data in the column will be lost.
  - You are about to drop the `_CompanyToTrade` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companyId` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Trade` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CompanyToTrade" DROP CONSTRAINT "_CompanyToTrade_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToTrade" DROP CONSTRAINT "_CompanyToTrade_B_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_roleId_fkey";

-- DropForeignKey
ALTER TABLE "Industry" DROP CONSTRAINT "Industry_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "roleId";

-- AlterTable
ALTER TABLE "Industry" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trade" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_CompanyToTrade";

-- AddForeignKey
ALTER TABLE "Company" ADD FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
