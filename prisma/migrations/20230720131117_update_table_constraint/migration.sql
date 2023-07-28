-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `Shipment_itemsId_fkey`;

-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `Shipment_trackingNumber_fkey`;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `Shipment_itemsId_fkey` FOREIGN KEY (`itemsId`) REFERENCES `ShipmentBatch`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `Shipment_trackingNumber_fkey` FOREIGN KEY (`trackingNumber`) REFERENCES `ShipmentTracking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
