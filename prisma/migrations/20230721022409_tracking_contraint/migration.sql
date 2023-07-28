/*
  Warnings:

  - A unique constraint covering the columns `[shipmentId]` on the table `ShipmentTracking` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `ShipmentTracking` ADD COLUMN `shipmentId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ShipmentTracking_shipmentId_key` ON `ShipmentTracking`(`shipmentId`);

-- AddForeignKey
ALTER TABLE `ShipmentTracking` ADD CONSTRAINT `ShipmentTracking_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `Shipment`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
