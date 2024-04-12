/*
  Warnings:

  - Added the required column `frame_125` to the `expedition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tirage_125` to the `expedition` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expedition" (
    "country" TEXT NOT NULL PRIMARY KEY,
    "tirage_25" REAL NOT NULL,
    "tirage_60" REAL NOT NULL,
    "tirage_100" REAL NOT NULL,
    "tirage_125" REAL NOT NULL,
    "delay_tirage" INTEGER NOT NULL,
    "frame_25" REAL NOT NULL,
    "frame_60" REAL NOT NULL,
    "frame_100" REAL NOT NULL,
    "frame_125" REAL NOT NULL,
    "delay_frame" INTEGER NOT NULL
);
INSERT INTO "new_expedition" ("country", "delay_frame", "delay_tirage", "frame_100", "frame_25", "frame_60", "tirage_100", "tirage_25", "tirage_60") SELECT "country", "delay_frame", "delay_tirage", "frame_100", "frame_25", "frame_60", "tirage_100", "tirage_25", "tirage_60" FROM "expedition";
DROP TABLE "expedition";
ALTER TABLE "new_expedition" RENAME TO "expedition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
