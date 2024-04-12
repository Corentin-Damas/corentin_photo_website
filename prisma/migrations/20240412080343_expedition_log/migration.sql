-- CreateTable
CREATE TABLE "expedition" (
    "country" TEXT NOT NULL PRIMARY KEY,
    "tirage_25" INTEGER NOT NULL,
    "tirage_60" INTEGER NOT NULL,
    "tirage_100" INTEGER NOT NULL,
    "delay_tirage" INTEGER NOT NULL,
    "frame_25" INTEGER NOT NULL,
    "frame_60" INTEGER NOT NULL,
    "frame_100" INTEGER NOT NULL,
    "delay_frame" INTEGER NOT NULL
);
