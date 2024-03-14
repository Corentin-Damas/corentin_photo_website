-- CreateTable
CREATE TABLE "image" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "WidthPix" INTEGER NOT NULL,
    "heightPix" INTEGER NOT NULL,
    "WidthCM" INTEGER NOT NULL,
    "heightCM" INTEGER NOT NULL,
    "format" TEXT NOT NULL,
    "film" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "fram" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bordLarge_16" INTEGER NOT NULL,
    "bordLarge_20" INTEGER NOT NULL,
    "bordLarge_24" INTEGER NOT NULL,
    "bordLarge_30" INTEGER NOT NULL,
    "bordLarge_35" INTEGER NOT NULL,
    "bordLarge_40" INTEGER NOT NULL,
    "bordLarge_50" INTEGER NOT NULL,
    "bordLarge_60" INTEGER NOT NULL,
    "bordLarge_70" INTEGER NOT NULL,
    "bordLarge_75" INTEGER NOT NULL,
    "bordLarge_80" INTEGER NOT NULL,
    "bordLarge_90" INTEGER NOT NULL
);
