/*
  Warnings:

  - The primary key for the `expedition` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expedition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "country" TEXT NOT NULL,
    "min_quantity" INTEGER NOT NULL DEFAULT 1,
    "tirage_25" REAL NOT NULL,
    "tirage_60" REAL NOT NULL,
    "tirage_100" REAL NOT NULL,
    "tirage_125" REAL NOT NULL,
    "tirage_180" REAL NOT NULL DEFAULT 0,
    "tirage_220" REAL NOT NULL DEFAULT 0,
    "delay_tirage" INTEGER NOT NULL,
    "dibon_25" REAL NOT NULL DEFAULT 0,
    "dibon_60" REAL NOT NULL DEFAULT 0,
    "dibon_100" REAL NOT NULL DEFAULT 0,
    "dibon_125" REAL NOT NULL DEFAULT 0,
    "dibon_180" REAL NOT NULL DEFAULT 0,
    "dibon_220" REAL NOT NULL DEFAULT 0,
    "delay_dibon" INTEGER NOT NULL DEFAULT 0,
    "frame_25" REAL NOT NULL,
    "frame_60" REAL NOT NULL,
    "frame_100" REAL NOT NULL,
    "frame_125" REAL NOT NULL,
    "frame_180" REAL NOT NULL DEFAULT 0,
    "frame_220" REAL NOT NULL DEFAULT 0,
    "delay_frame" INTEGER NOT NULL
);
INSERT INTO "new_expedition" ("country", "delay_dibon", "delay_frame", "delay_tirage", "dibon_100", "dibon_125", "dibon_180", "dibon_220", "dibon_25", "dibon_60", "frame_100", "frame_125", "frame_180", "frame_220", "frame_25", "frame_60", "id", "min_quantity", "tirage_100", "tirage_125", "tirage_180", "tirage_220", "tirage_25", "tirage_60") SELECT "country", "delay_dibon", "delay_frame", "delay_tirage", "dibon_100", "dibon_125", "dibon_180", "dibon_220", "dibon_25", "dibon_60", "frame_100", "frame_125", "frame_180", "frame_220", "frame_25", "frame_60", "id", "min_quantity", "tirage_100", "tirage_125", "tirage_180", "tirage_220", "tirage_25", "tirage_60" FROM "expedition";
DROP TABLE "expedition";
ALTER TABLE "new_expedition" RENAME TO "expedition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
