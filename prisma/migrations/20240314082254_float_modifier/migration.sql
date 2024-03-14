/*
  Warnings:

  - You are about to alter the column `bordLarge_16` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_20` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_24` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_30` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_35` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_40` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_50` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_60` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_70` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_75` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_80` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `bordLarge_90` on the `fram` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_fram" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "format" TEXT NOT NULL,
    "bordLarge_16" REAL NOT NULL,
    "bordLarge_20" REAL NOT NULL,
    "bordLarge_24" REAL NOT NULL,
    "bordLarge_30" REAL NOT NULL,
    "bordLarge_35" REAL NOT NULL,
    "bordLarge_40" REAL NOT NULL,
    "bordLarge_50" REAL NOT NULL,
    "bordLarge_60" REAL NOT NULL,
    "bordLarge_70" REAL NOT NULL,
    "bordLarge_75" REAL NOT NULL,
    "bordLarge_80" REAL NOT NULL,
    "bordLarge_90" REAL NOT NULL
);
INSERT INTO "new_fram" ("bordLarge_16", "bordLarge_20", "bordLarge_24", "bordLarge_30", "bordLarge_35", "bordLarge_40", "bordLarge_50", "bordLarge_60", "bordLarge_70", "bordLarge_75", "bordLarge_80", "bordLarge_90", "format", "id") SELECT "bordLarge_16", "bordLarge_20", "bordLarge_24", "bordLarge_30", "bordLarge_35", "bordLarge_40", "bordLarge_50", "bordLarge_60", "bordLarge_70", "bordLarge_75", "bordLarge_80", "bordLarge_90", "format", "id" FROM "fram";
DROP TABLE "fram";
ALTER TABLE "new_fram" RENAME TO "fram";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
