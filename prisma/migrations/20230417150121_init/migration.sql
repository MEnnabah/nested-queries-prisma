-- CreateTable
CREATE TABLE "Properties" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "catId" INTEGER,

    CONSTRAINT "Properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Cat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Seed
INSERT INTO "Cat" ("id", "name", "age", "parentId") VALUES (1, 'Grumpy Cat', 6, null), (2, 'Garfield', 3, 1), (3, 'Keyboard Cat', 2, 1), (4, 'Nyan Cat', 1, 1);
INSERT INTO "Properties" ("id", "color", "catId") VALUES (1, 'orange', 1), (2, 'gray', 2), (3, 'rainbow', 3);