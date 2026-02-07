-- CreateTable
CREATE TABLE "University" (
    "id" TEXT NOT NULL,
    "universityName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "tuitionFee" INTEGER NOT NULL,
    "ranking" INTEGER NOT NULL,
    "establishedYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);
