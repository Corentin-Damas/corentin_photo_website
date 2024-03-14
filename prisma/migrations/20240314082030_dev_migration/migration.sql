/*
  Warnings:

  - Added the required column `format` to the `fram` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_fram" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "format" TEXT NOT NULL,
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
INSERT INTO "new_fram" ("bordLarge_16", "bordLarge_20", "bordLarge_24", "bordLarge_30", "bordLarge_35", "bordLarge_40", "bordLarge_50", "bordLarge_60", "bordLarge_70", "bordLarge_75", "bordLarge_80", "bordLarge_90", "id") SELECT "bordLarge_16", "bordLarge_20", "bordLarge_24", "bordLarge_30", "bordLarge_35", "bordLarge_40", "bordLarge_50", "bordLarge_60", "bordLarge_70", "bordLarge_75", "bordLarge_80", "bordLarge_90", "id" FROM "fram";
DROP TABLE "fram";
ALTER TABLE "new_fram" RENAME TO "fram";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
