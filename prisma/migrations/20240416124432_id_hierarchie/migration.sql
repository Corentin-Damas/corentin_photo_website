/*
  Warnings:

  - The primary key for the `expedition` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expedition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "min_quantity" INTEGER NOT NULL DEFAULT 1,
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
INSERT INTO "new_expedition" ("country", "delay_frame", "delay_tirage", "frame_100", "frame_125", "frame_25", "frame_60", "id", "min_quantity", "tirage_100", "tirage_125", "tirage_25", "tirage_60") SELECT "country", "delay_frame", "delay_tirage", "frame_100", "frame_125", "frame_25", "frame_60", "id", "min_quantity", "tirage_100", "tirage_125", "tirage_25", "tirage_60" FROM "expedition";
DROP TABLE "expedition";
ALTER TABLE "new_expedition" RENAME TO "expedition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;