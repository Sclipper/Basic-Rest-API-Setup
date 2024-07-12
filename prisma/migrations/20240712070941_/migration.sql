-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL DEFAULT '',
    "user_id" INTEGER,
    "user_type" TEXT,
    "rec_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "http_status" INTEGER,
    "ip_address" TEXT,
    "duration" INTEGER,
    "method" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);
