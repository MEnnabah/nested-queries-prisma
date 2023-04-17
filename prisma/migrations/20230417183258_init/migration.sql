-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "ownerId" INTEGER,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leg" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "catId" INTEGER,

    CONSTRAINT "Leg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claw" (
    "id" SERIAL NOT NULL,
    "length" TEXT NOT NULL,
    "legId" INTEGER,

    CONSTRAINT "Claw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "House" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "ownerId" INTEGER,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leg" ADD CONSTRAINT "Leg_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Claw" ADD CONSTRAINT "Claw_legId_fkey" FOREIGN KEY ("legId") REFERENCES "Leg"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Seed
INSERT INTO "public"."Owner" ("id", "name") VALUES
(1, 'Human');

INSERT INTO "public"."House" ("id", "address", "ownerId") VALUES
(1, 'Prisma', 1),
(2, 'Street 1', 1);

INSERT INTO "public"."Cat" ("id", "name", "age", "ownerId") VALUES
(1, 'Kitty', 3, 1);

INSERT INTO "public"."Leg" ("id", "color", "catId") VALUES
(1, 'orange', 1),
(2, 'gray', 1),
(3, 'blue', 1),
(4, 'pink', 1);

INSERT INTO "public"."Claw" ("id", "length", "legId") VALUES
(1, '0.4cm', 1),
(2, '0.5cm', 2),
(3, '0.5cm', 3),
(4, '0.5', 4);