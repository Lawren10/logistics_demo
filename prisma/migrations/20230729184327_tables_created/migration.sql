-- CreateTable
CREATE TABLE `Customers` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Customers_id_key`(`id`),
    UNIQUE INDEX `Customers_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShipmentBatch` (
    `id` VARCHAR(191) NOT NULL,
    `items` JSON NOT NULL,
    `shipmentId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `ShipmentBatch_id_key`(`id`),
    UNIQUE INDEX `ShipmentBatch_shipmentId_key`(`shipmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shipment` (
    `id` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `deliveryMode` VARCHAR(191) NOT NULL,
    `deliveryDate` VARCHAR(191) NOT NULL,
    `shippingDate` VARCHAR(191) NOT NULL,
    `receiverDetail` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Shipment_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShipmentTracking` (
    `id` VARCHAR(191) NOT NULL,
    `shipmentId` VARCHAR(191) NULL,
    `processing` DATETIME(3) NULL,
    `shipped` DATETIME(3) NULL,
    `arrived` DATETIME(3) NULL,
    `delivered` DATETIME(3) NULL,
    `shipingProcess` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `ShipmentTracking_id_key`(`id`),
    UNIQUE INDEX `ShipmentTracking_shipmentId_key`(`shipmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AdminUser` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hashedPassword` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AdminUser_id_key`(`id`),
    UNIQUE INDEX `AdminUser_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ShipmentBatch` ADD CONSTRAINT `ShipmentBatch_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `Shipment`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `Shipment_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShipmentTracking` ADD CONSTRAINT `ShipmentTracking_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `Shipment`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;





-- CREATE TABLE `sql9653111`.`Customers` ( 
--     `id` VARCHAR(191) NOT NULL , 
--     `firstName` VARCHAR(191) NOT NULL , 
--     `lastName` VARCHAR(191) NOT NULL , 
--     `email` VARCHAR(191) NOT NULL , 
--     `phone` VARCHAR(191) NOT NULL , 
--     `address` VARCHAR(191) NOT NULL , 
--     `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
--     `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
--     PRIMARY KEY (`id`(191)),
--     UNIQUE `Customers_phone_key` (`phone`(191))
--     ) ENGINE = InnoDB;