-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'GUIDE', 'LEAD_GUIDE', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "photo" TEXT DEFAULT 'default-user.jpg',
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL,
    "verified" BOOLEAN DEFAULT false,
    "verificationCode" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_email_verificationCode_idx" ON "users"("email", "verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_verificationCode_key" ON "users"("email", "verificationCode");
