/*
  Warnings:

  - Made the column `name` on table `Company` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `contactPerson` on table `Company` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `bio` on table `Company` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Company` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `website` on table `Company` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Industry` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Role` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `companyId` on table `Role` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Skill` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `roleId` on table `Skill` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Trade` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `companyId` on table `Trade` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "contactPerson" SET NOT NULL,
ALTER COLUMN "bio" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "website" SET NOT NULL;

-- AlterTable
ALTER TABLE "Industry" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "companyId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "roleId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Trade" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "companyId" SET NOT NULL;
