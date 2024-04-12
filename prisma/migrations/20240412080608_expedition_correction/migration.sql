/*
  Warnings:

  - You are about to alter the column `frame_100` on the `expedition` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `frame_25` on the `expedition` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `frame_60` on the `expedition` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `tirage_100` on the `expedition` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `tirage_25` on the `expedition` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `tirage_60` on the `expedition` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expedition" (
    "country" TEXT NOT NULL PRIMARY KEY,
    "tirage_25" REAL NOT NULL,
    "tirage_60" REAL NOT NULL,
    "tirage_100" REAL NOT NULL,
    "delay_tirage" INTEGER NOT NULL,
    "frame_25" REAL NOT NULL,
    "frame_60" REAL NOT NULL,
    "frame_100" REAL NOT NULL,
    "delay_frame" INTEGER NOT NULL
);
INSERT INTO "new_expedition" ("country", "delay_frame", "delay_tirage", "frame_100", "frame_25", "frame_60", "tirage_100", "tirage_25", "tirage_60") SELECT "country", "delay_frame", "delay_tirage", "frame_100", "frame_25", "frame_60", "tirage_100", "tirage_25", "tirage_60" FROM "expedition";
DROP TABLE "expedition";
ALTER TABLE "new_expedition" RENAME TO "expedition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
