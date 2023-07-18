/*
  Warnings:

  - You are about to drop the column `shippinDate` on the `Shipment` table. All the data in the column will be lost.
  - Added the required column `shippingDate` to the `Shipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Shipment` DROP COLUMN `shippinDate`,
    ADD COLUMN `shippingDate` VARCHAR(191) NOT NULL;
