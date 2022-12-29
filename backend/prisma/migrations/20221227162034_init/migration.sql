-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `prefession` VARCHAR(191) NULL,
    `niveau` ENUM('A1', 'A2', 'B1', 'B2', 'C1', 'C2') NULL,
    `role` ENUM('BASIC', 'ADMIN') NOT NULL DEFAULT 'BASIC',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `numero` INTEGER NULL,
    `annee` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('ORAL_P1', 'ORAL_P2', 'ORAL_P3', 'ORAL_P4', 'ECRIT_P5', 'ECRIT_P6', 'ECRIT_P7') NOT NULL,
    `numero` INTEGER NOT NULL,
    `directions` VARCHAR(191) NOT NULL,
    `questions` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserTest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `testId` INTEGER NOT NULL,
    `etat` ENUM('FINI', 'NONFINI') NOT NULL DEFAULT 'NONFINI',
    `score` INTEGER NOT NULL,
    `niveau` ENUM('A1', 'A2', 'B1', 'B2', 'C1', 'C2') NOT NULL,
    `reponses` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListVocabulaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vocabulaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mot` VARCHAR(191) NOT NULL,
    `traduction` VARCHAR(191) NOT NULL,
    `note` VARCHAR(191) NOT NULL,
    `listId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PartieToTest` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PartieToTest_AB_unique`(`A`, `B`),
    INDEX `_PartieToTest_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserTest` ADD CONSTRAINT `UserTest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTest` ADD CONSTRAINT `UserTest_testId_fkey` FOREIGN KEY (`testId`) REFERENCES `Test`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListVocabulaire` ADD CONSTRAINT `ListVocabulaire_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vocabulaire` ADD CONSTRAINT `Vocabulaire_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `ListVocabulaire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PartieToTest` ADD CONSTRAINT `_PartieToTest_A_fkey` FOREIGN KEY (`A`) REFERENCES `Partie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PartieToTest` ADD CONSTRAINT `_PartieToTest_B_fkey` FOREIGN KEY (`B`) REFERENCES `Test`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
