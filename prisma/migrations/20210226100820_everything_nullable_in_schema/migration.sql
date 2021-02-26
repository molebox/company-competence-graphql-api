-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "contactPerson" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "website" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Industry" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "companyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "roleId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Trade" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "companyId" DROP NOT NULL;
