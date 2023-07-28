/*
  Warnings:

  - You are about to drop the column `itemsId` on the `Shipment` table. All the data in the column will be lost.
  - You are about to drop the column `trackingNumber` on the `Shipment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shipmentId]` on the table `ShipmentBatch` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `Shipment_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `Shipment_itemsId_fkey`;

-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `Shipment_trackingNumber_fkey`;

-- AlterTable
ALTER TABLE `Shipment` DROP COLUMN `itemsId`,
    DROP COLUMN `trackingNumber`;

-- AlterTable
ALTER TABLE `ShipmentBatch` ADD COLUMN `shipmentId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ShipmentBatch_shipmentId_key` ON `ShipmentBatch`(`shipmentId`);

-- AddForeignKey
ALTER TABLE `ShipmentBatch` ADD CONSTRAINT `ShipmentBatch_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `Shipment`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `Shipment_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
