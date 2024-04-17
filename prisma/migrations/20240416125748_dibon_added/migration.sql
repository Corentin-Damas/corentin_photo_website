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
    "dibon_25" REAL NOT NULL DEFAULT 0,
    "dibon_60" REAL NOT NULL DEFAULT 0,
    "dibon_100" REAL NOT NULL DEFAULT 0,
    "dibon_125" REAL NOT NULL DEFAULT 0,
    "delay_dibon" INTEGER NOT NULL DEFAULT 0,
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
