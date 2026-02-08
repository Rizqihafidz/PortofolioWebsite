-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "profileImage" TEXT NOT NULL DEFAULT '/assets/profile-pic.jpeg',
    "aboutBio" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutCard" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "profileId" TEXT NOT NULL DEFAULT 'singleton',

    CONSTRAINT "AboutCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "tags" TEXT[],
    "cardImage" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "heroImage" TEXT NOT NULL,
    "badge" TEXT NOT NULL,
    "fullDescription" TEXT[],
    "techStack" TEXT[],
    "highlights" TEXT[],
    "metaYear" TEXT NOT NULL,
    "metaRole" TEXT NOT NULL,
    "metaPlatform" TEXT NOT NULL,
    "metaStatus" TEXT NOT NULL,
    "metaStatusColor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "GalleryItem" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "projectSlug" TEXT NOT NULL,

    CONSTRAINT "GalleryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mechanic" (
    "id" TEXT NOT NULL,
    "icon" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT 'primary',
    "order" INTEGER NOT NULL,
    "projectSlug" TEXT NOT NULL,

    CONSTRAINT "Mechanic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectLink" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL,
    "order" INTEGER NOT NULL,
    "projectSlug" TEXT NOT NULL,

    CONSTRAINT "ProjectLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE INDEX "AboutCard_profileId_idx" ON "AboutCard"("profileId");

-- CreateIndex
CREATE INDEX "GalleryItem_projectSlug_idx" ON "GalleryItem"("projectSlug");

-- CreateIndex
CREATE INDEX "Mechanic_projectSlug_idx" ON "Mechanic"("projectSlug");

-- CreateIndex
CREATE INDEX "ProjectLink_projectSlug_idx" ON "ProjectLink"("projectSlug");

-- AddForeignKey
ALTER TABLE "AboutCard" ADD CONSTRAINT "AboutCard_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GalleryItem" ADD CONSTRAINT "GalleryItem_projectSlug_fkey" FOREIGN KEY ("projectSlug") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mechanic" ADD CONSTRAINT "Mechanic_projectSlug_fkey" FOREIGN KEY ("projectSlug") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectLink" ADD CONSTRAINT "ProjectLink_projectSlug_fkey" FOREIGN KEY ("projectSlug") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
