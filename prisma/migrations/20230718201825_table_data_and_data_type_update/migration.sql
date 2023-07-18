/*
  Warnings:

  - Added the required column `deliveryDate` to the `Shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryMode` to the `Shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippinDate` to the `Shipment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Customers_email_key` ON `Customers`;

-- AlterTable
ALTER TABLE `Shipment` ADD COLUMN `deliveryDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryMode` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippinDate` VARCHAR(191) NOT NULL;
