-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 14, 2020 at 12:44 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `computer_review`
--

-- --------------------------------------------------------

--
-- Table structure for table `available_programs`
--

DROP TABLE IF EXISTS `available_programs`;
CREATE TABLE `available_programs` (
  `id` int(8) NOT NULL,
  `operating_system` varchar(255) NOT NULL,
  `used_by_software` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `available_programs`
--

INSERT INTO `available_programs` (`id`, `operating_system`, `used_by_software`) VALUES
(1, 'win10', 'microsoft'),
(2, 'win8', 'microsoft'),
(3, 'linux', 'linux'),
(4, 'ubuntu', 'linux');

-- --------------------------------------------------------

--
-- Table structure for table `battery`
--

DROP TABLE IF EXISTS `battery`;
CREATE TABLE `battery` (
  `id` int(8) NOT NULL,
  `species` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `battery`
--

INSERT INTO `battery` (`id`, `species`, `type`) VALUES
(1, ' 4800 mAh', ' Pin liền Lithium-ion polymer battery 7.4V - 2 cells\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
CREATE TABLE `board` (
  `id` int(8) NOT NULL,
  `chip` varchar(255) NOT NULL,
  `bus` varchar(255) NOT NULL,
  `ram` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `board`
--

INSERT INTO `board` (`id`, `chip`, `bus`, `ram`) VALUES
(1, ' Tích hợp', ' PCI Express v2.0', ' 3GB (onboard RAM)');

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(45) COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`, `image`) VALUES
(1, 'DELL', NULL),
(2, 'ASUS', ''),
(3, 'HP', NULL),
(4, 'ACER', NULL),
(5, 'Lenovo', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cpu`
--

DROP TABLE IF EXISTS `cpu`;
CREATE TABLE `cpu` (
  `id` int(11) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `technology` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `speed` varchar(45) NOT NULL,
  `cache` varchar(45) NOT NULL,
  `max_speed` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cpu`
--

INSERT INTO `cpu` (`id`, `brand`, `technology`, `type`, `speed`, `cache`, `max_speed`) VALUES
(1, ' Intel Celeron N3350', ' Celeron', ' N3350', ' 1.1 GHz', '2MB Cache', ' 2.4 GHz');

-- --------------------------------------------------------

--
-- Table structure for table `evaluation`
--

DROP TABLE IF EXISTS `evaluation`;
CREATE TABLE `evaluation` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` varchar(45) NOT NULL,
  `vote` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `graphics`
--

DROP TABLE IF EXISTS `graphics`;
CREATE TABLE `graphics` (
  `id` int(11) NOT NULL,
  `chipset` int(11) NOT NULL,
  `memory` int(11) NOT NULL,
  `design_style` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hard_disk`
--

DROP TABLE IF EXISTS `hard_disk`;
CREATE TABLE `hard_disk` (
  `id` int(8) NOT NULL,
  `type` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `price` varchar(45) NOT NULL,
  `rating` int(11) NULL DEFAULT 0,
--  `imgUrl` varchar(100) NULL DEFAULT NULL,
  `description` varchar(45) COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `image` varchar(45) COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `web_id` int(11) NULL DEFAULT NULL,
  `brand_id` int(11) NOT NULL,
  `cpu_id` int(11) NULL DEFAULT NULL,
  `board_id` int(11) NULL DEFAULT NULL,
  `ram_id` int(11) NULL DEFAULT NULL,
  `harddisk_id` int(11) NULL DEFAULT NULL,
  `graphics_id` int(11) NULL DEFAULT NULL,
  `screen_id` int(11) NULL DEFAULT NULL,
  `program_id` int(11) NULL DEFAULT NULL,
  `battery_id` int(11) NULL DEFAULT NULL,
  `size_and_weight_id` int(11) NULL DEFAULT NULL,
  `security_id` int(11) NULL DEFAULT NULL,
  `brand` varchar(45) COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
CREATE TABLE `ram` (
  `id` int(8) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `bus_speed` varchar(255) NOT NULL,
  `slots` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `screen`
--

DROP TABLE IF EXISTS `screen`;
CREATE TABLE `screen` (
  `id` int(8) NOT NULL,
  `size` varchar(255) NOT NULL,
  `resolution` varchar(255) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `sensor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sell_web`
--

DROP TABLE IF EXISTS `sell_web`;
CREATE TABLE `sell_web` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  `link` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `size_weight`
--

DROP TABLE IF EXISTS `size_weight`;
CREATE TABLE `size_weight` (
  `id` int(8) NOT NULL,
  `size` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `component` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`) VALUES
(1, 'admin', 'admin@gmail.com', '12345678', ''),
(2, 'do', 'do@gmail.com', '12345678', ''),
(3, 'phuonganh', 'phuonganh@gmail.com', '12345678', ''),
(4, 'anhduc', 'anhduc@gmail.com', '12345678', ''),
(5, 'yen', 'yen@gmail.com', '12345678', ''),
(6, 'nga', 'nga@gmail.com', '12345678', '');

-- --------------------------------------------------------

--
-- Table structure for table `web_communication`
--

DROP TABLE IF EXISTS `web_communication`;
CREATE TABLE `web_communication` (
  `id` int(8) NOT NULL,
  `web_communication` varchar(255) NOT NULL,
  `function` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `available_programs`
--
ALTER TABLE `available_programs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `battery`
--
ALTER TABLE `battery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `board`
--
ALTER TABLE `board`
  ADD PRIMARY KEY (`id`);

--
<<<<<<< HEAD
-- Indexes for table `brand`
--
-- ALTER TABLE `brand`
--   ADD PRIMARY KEY (`id`);

--
=======
>>>>>>> ef215a3d850aa106c668ae93617bef86dcfa5c0d
-- Indexes for table `cpu`
--
ALTER TABLE `cpu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_idx` (`user_id`),
  ADD KEY `product_id_idx` (`product_id`);

--
-- Indexes for table `graphics`
--
ALTER TABLE `graphics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hard_disk`
--
ALTER TABLE `hard_disk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  -- ADD PRIMARY KEY (`id`),
  ADD KEY `product_board` (`board_id`),
  ADD KEY `product_brand` (`brand_id`),
  ADD KEY `product_battery` (`battery_id`),
  ADD KEY `product_cpu` (`cpu_id`),
  ADD KEY `product_harddisk` (`harddisk_id`),
  ADD KEY `product_ram` (`ram_id`),
  ADD KEY `product_screen` (`screen_id`),
  ADD KEY `product_size_weight` (`size_and_weight_id`),
  ADD KEY `product_sell_web` (`web_id`);

--
-- Indexes for table `ram`
--
ALTER TABLE `ram`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `screen`
--
ALTER TABLE `screen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sell_web`
--
ALTER TABLE `sell_web`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size_weight`
--
ALTER TABLE `size_weight`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `web_communication`
--
ALTER TABLE `web_communication`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `available_programs`
--
ALTER TABLE `available_programs`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `battery`
--
ALTER TABLE `battery`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `board`
--
ALTER TABLE `board`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cpu`
--
ALTER TABLE `cpu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `evaluation`
--
ALTER TABLE `evaluation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `graphics`
--
ALTER TABLE `graphics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hard_disk`
--
ALTER TABLE `hard_disk`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ram`
--
ALTER TABLE `ram`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `screen`
--
ALTER TABLE `screen`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sell_web`
--
ALTER TABLE `sell_web`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `size_weight`
--
ALTER TABLE `size_weight`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `web_communication`
--
ALTER TABLE `web_communication`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_battery` FOREIGN KEY (`battery_id`) REFERENCES `battery` (`id`),
  ADD CONSTRAINT `product_board` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`),
  ADD CONSTRAINT `product_brand` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `product_cpu` FOREIGN KEY (`cpu_id`) REFERENCES `cpu` (`id`),
  ADD CONSTRAINT `product_harddisk` FOREIGN KEY (`harddisk_id`) REFERENCES `hard_disk` (`id`),
  ADD CONSTRAINT `product_ram` FOREIGN KEY (`ram_id`) REFERENCES `ram` (`id`),
  ADD CONSTRAINT `product_screen` FOREIGN KEY (`screen_id`) REFERENCES `screen` (`id`),
  ADD CONSTRAINT `product_sell_web` FOREIGN KEY (`web_id`) REFERENCES `web_communication` (`id`),
  ADD CONSTRAINT `product_size_weight` FOREIGN KEY (`size_and_weight_id`) REFERENCES `size_weight` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
