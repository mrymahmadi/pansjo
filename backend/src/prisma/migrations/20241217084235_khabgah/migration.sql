-- CreateEnum
CREATE TYPE "Contract" AS ENUM ('ANNUALLY', 'FOUR_MONTHS');

-- CreateEnum
CREATE TYPE "PansionType" AS ENUM ('EMPLOYEE', 'STUDENT');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "positionId" INTEGER NOT NULL,
    "pansionId" INTEGER NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pansion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "codeParvane" TEXT NOT NULL,
    "numberOfRoom" INTEGER NOT NULL,
    "numberOfBed" INTEGER NOT NULL,
    "advancePayment" DOUBLE PRECISION NOT NULL,
    "priceRent" DOUBLE PRECISION NOT NULL,
    "chargeMony" DOUBLE PRECISION NOT NULL,
    "typeOfContract" "Contract" NOT NULL DEFAULT 'ANNUALLY',
    "provinceId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "typeOfPansion" "PansionType" NOT NULL DEFAULT 'EMPLOYEE',

    CONSTRAINT "Pansion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "enName" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "enName" TEXT NOT NULL,
    "provinceId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PosInPansion" (
    "positionId" INTEGER NOT NULL,
    "pansionId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "PosInPansion_pkey" PRIMARY KEY ("positionId","pansionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pansion_codeParvane_key" ON "Pansion"("codeParvane");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pansionId_fkey" FOREIGN KEY ("pansionId") REFERENCES "Pansion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pansion" ADD CONSTRAINT "Pansion_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pansion" ADD CONSTRAINT "Pansion_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosInPansion" ADD CONSTRAINT "PosInPansion_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosInPansion" ADD CONSTRAINT "PosInPansion_pansionId_fkey" FOREIGN KEY ("pansionId") REFERENCES "Pansion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
