-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2020 at 04:53 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

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

CREATE TABLE `available_programs` (
  `id` int(11) NOT NULL,
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
(4, 'ubuntu', 'linux'),
(5, 'win 10', 'microsoft'),
(6, '', ''),
(7, 'win 7', 'microsoft'),
(8, 'win 10', 'microsoft'),
(9, 'aaa', 'aaa'),
(10, 'â', 'aa'),
(11, '', ''),
(12, '', ''),
(13, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `battery`
--

CREATE TABLE `battery` (
  `id` int(11) NOT NULL,
  `species` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `battery`
--

INSERT INTO `battery` (`id`, `species`, `type`) VALUES
(1, ' 4800 mAh', ' Pin liền Lithium-ion polymer battery 7.4V - 2 cells\r\n'),
(2, ' 4800 mAh', ' Pin liền Lithium-ion polymer battery 7.4V - 2 cells\r\n'),
(3, '', ''),
(4, '111111mah', 'jfuiesrhgiusehr'),
(5, '10000mah', 'type'),
(6, 'aaa', 'aaaa'),
(7, 'sa', 'aa'),
(8, '', ''),
(9, '', ''),
(10, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `board`
--

CREATE TABLE `board` (
  `id` int(11) NOT NULL,
  `chip` varchar(255) NOT NULL,
  `bus` varchar(255) NOT NULL,
  `ram` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `board`
--

INSERT INTO `board` (`id`, `chip`, `bus`, `ram`) VALUES
(1, ' Tích hợp', ' PCI Express v2.0', ' 3GB (onboard RAM)'),
(2, ' Tích hợp', ' PCI Express v2.0', ' 3GB (onboard RAM)'),
(3, '', '', ''),
(4, '', '', ''),
(5, 'chip', 'bus', 'ram'),
(6, 'aaa', 'aaaa', 'aaaaa'),
(7, 'aaa', 'aa', 'a'),
(8, '', '', ''),
(9, '', '', ''),
(10, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`, `image`) VALUES
(1, 'DELL', NULL),
(2, 'ASUS', ''),
(3, 'HP', NULL),
(4, 'ACER', NULL),
(5, 'Lenovo', NULL),
(6, 'DELL', NULL),
(7, '', NULL),
(8, '', NULL),
(9, 'name', 'image'),
(10, 'aaaaaa', 'aaaaaa'),
(11, 'vttnguyen', 'v'),
(12, '', NULL),
(13, '', NULL),
(14, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `product_id`, `content`, `created_at`, `updated_at`) VALUES
(1, 6, 9, 'sâsa', '2020-06-22 01:31:17', '2020-06-22 01:31:17'),
(5, 8, 8, 'aaaaa', '2020-06-21 15:22:02', '2020-06-21 15:22:02'),
(6, 8, 8, 'so good', '2020-06-21 16:15:09', '2020-06-21 16:15:09'),
(7, 8, 8, 'ccccc', '2020-06-21 16:15:29', '2020-06-21 16:15:29'),
(9, 3, 9, 'aaaaacccc', '2020-06-21 16:33:02', '2020-06-21 16:33:02');

-- --------------------------------------------------------

--
-- Table structure for table `cpu`
--

CREATE TABLE `cpu` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `speed` varchar(255) NOT NULL,
  `cache` varchar(255) NOT NULL,
  `max_speed` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cpu`
--

INSERT INTO `cpu` (`id`, `brand`, `technology`, `type`, `speed`, `cache`, `max_speed`) VALUES
(1, ' Intel Celeron N3350', ' Celeron', ' N3350', ' 1.1 GHz', '2MB Cache', ' 2.4 GHz'),
(2, ' Intel Celeron N3350', ' Celeron', ' N3350', ' 1.1 GHz', '2MB Cache', ' 2.4 GHz'),
(3, '', '', '', '', '', ''),
(4, '', '', '', '', '', ''),
(5, 'brand', 'technologu', 'type', 'speed', 'cache', 'max speed'),
(6, 'aaaaa', 'aaaaaa', 'aaaaaa', 'aaaa', 'aaaa', 'aaaa'),
(7, 'sâsas', 'aaaaaa', 'âsas', 'sâsas', 'sa', 'sâsa'),
(8, '', '', '', '', '', ''),
(9, '', '', '', '', '', ''),
(10, '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `evaluation`
--

CREATE TABLE `evaluation` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `vote` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `graphics`
--

CREATE TABLE `graphics` (
  `id` int(11) NOT NULL,
  `chipset` varchar(255) NOT NULL,
  `memory` varchar(255) NOT NULL,
  `design_style` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `graphics`
--

INSERT INTO `graphics` (`id`, `chipset`, `memory`, `design_style`) VALUES
(1, '0', '0', '0'),
(2, '', '', ''),
(3, '', '', ''),
(4, '', '', ''),
(5, '', '', ''),
(6, '', '', ''),
(7, '', '', ''),
(8, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `hard_disk`
--

CREATE TABLE `hard_disk` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hard_disk`
--

INSERT INTO `hard_disk` (`id`, `type`, `capacity`) VALUES
(1, '', ''),
(2, '', ''),
(3, '', ''),
(4, '', ''),
(5, '', ''),
(6, '', ''),
(7, '', ''),
(8, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `rating` int(11) DEFAULT 0,
  `description` mediumtext DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `web_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `cpu_id` int(11) DEFAULT NULL,
  `board_id` int(11) DEFAULT NULL,
  `ram_id` int(11) DEFAULT NULL,
  `harddisk_id` int(11) DEFAULT NULL,
  `graphics_id` int(11) DEFAULT NULL,
  `screen_id` int(11) DEFAULT NULL,
  `program_id` int(11) DEFAULT NULL,
  `battery_id` int(11) DEFAULT NULL,
  `size_and_weight_id` int(11) DEFAULT NULL,
  `security_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `rating`, `description`, `image`, `web_id`, `brand_id`, `cpu_id`, `board_id`, `ram_id`, `harddisk_id`, `graphics_id`, `screen_id`, `program_id`, `battery_id`, `size_and_weight_id`, `security_id`, `created_at`, `updated_at`) VALUES
(3, 'ta hong long', '5000', 6, 'sâsas', '/uploads/10c6b5b55bfd0cbab29d9bd92d719d9a', NULL, 6, 2, 2, NULL, NULL, NULL, NULL, 5, 2, NULL, NULL, '2020-06-21 16:28:31', '2020-06-21 16:28:31'),
(8, 'abc222', '222', 2, 'abc222', '/uploads/10c6b5b55bfd0cbab29d9bd92d719d9a', 3, 9, 5, 5, 3, 3, 3, 3, 8, 5, 3, NULL, '2020-06-21 20:54:55', '2020-06-21 20:54:55'),
(9, 'minh ngu', '5000', 4, 'sdadsa', '/uploads/10c6b5b55bfd0cbab29d9bd92d719d9a', 4, 10, 6, 6, 4, 4, 4, 4, 9, 6, 4, NULL, '2020-06-21 20:55:08', '2020-06-21 20:55:08'),
(10, 'ta hong long', '7000', 5, 'a', '/uploads/10c6b5b55bfd0cbab29d9bd92d719d9a', 5, 11, 7, 7, 5, 5, 5, 5, 10, 7, 5, NULL, '2020-06-21 20:55:14', '2020-06-21 20:55:14');

-- --------------------------------------------------------

--
-- Table structure for table `ram`
--

CREATE TABLE `ram` (
  `id` int(11) NOT NULL,
  `capacity` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `bus_speed` varchar(255) NOT NULL,
  `slots` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ram`
--

INSERT INTO `ram` (`id`, `capacity`, `type`, `bus_speed`, `slots`) VALUES
(1, '', '', '', 0),
(2, '', '', '', 0),
(3, '', '', '', 0),
(4, '', '', '', 0),
(5, '', '', '', 0),
(6, '', '', '', 0),
(7, '', '', '', 0),
(8, '', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `screen`
--

CREATE TABLE `screen` (
  `id` int(11) NOT NULL,
  `size` varchar(255) NOT NULL,
  `resolution` varchar(255) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `sensor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `screen`
--

INSERT INTO `screen` (`id`, `size`, `resolution`, `technology`, `sensor`) VALUES
(1, '', '', '', ''),
(2, '', '', '', ''),
(3, '', '', '', ''),
(4, '', '', '', ''),
(5, '', '', '', ''),
(6, '', '', '', ''),
(7, '', '', '', ''),
(8, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `sell_web`
--

CREATE TABLE `sell_web` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sell_web`
--

INSERT INTO `sell_web` (`id`, `name`, `image`, `link`) VALUES
(1, '', '', ''),
(2, '', '', ''),
(3, '', '', ''),
(4, '', '', ''),
(5, '', '', ''),
(6, '', '', ''),
(7, '', '', ''),
(8, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `size_weight`
--

CREATE TABLE `size_weight` (
  `id` int(11) NOT NULL,
  `size` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `size_weight`
--

INSERT INTO `size_weight` (`id`, `size`, `weight`, `material`) VALUES
(1, '', '', ''),
(2, '', '', ''),
(3, '', '', ''),
(4, '', '', ''),
(5, '', '', ''),
(6, '', '', ''),
(7, '', '', ''),
(8, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  `role` varchar(11) NOT NULL DEFAULT 'Member'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `role`) VALUES
(3, 'Nga Vui Tinh', 'admin@gmail.com', '25d55ad283aa400af464c76d713c07ad', '/uploads/10c6b5b55bfd0cbab29d9bd92d719d9a', 'Admin'),
(6, 'Do Vui Ve', 'bowsasvkl@gmail.com', '25d55ad283aa400af464c76d713c07ad', '/uploads/10c6b5b55bfd0cbab29d9bd92d719d9a', 'Member'),
(8, 'ta hong long', 'powsasvkl@gmail.com', '25d55ad283aa400af464c76d713c07ad', '/uploads/56fda37abc763ae8221c7be30d38c902', 'Member');

-- --------------------------------------------------------

--
-- Table structure for table `web_communication`
--

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
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cpu`
--
ALTER TABLE `cpu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `battery_id` (`battery_id`),
  ADD KEY `board_id` (`board_id`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `cpu_id` (`cpu_id`),
  ADD KEY `graphics_id` (`graphics_id`),
  ADD KEY `harddisk_id` (`harddisk_id`),
  ADD KEY `ram_id` (`ram_id`),
  ADD KEY `screen_id` (`screen_id`),
  ADD KEY `program_id` (`program_id`),
  ADD KEY `size_and_weight_id` (`size_and_weight_id`),
  ADD KEY `web_id` (`web_id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `available_programs`
--
ALTER TABLE `available_programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `battery`
--
ALTER TABLE `battery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `board`
--
ALTER TABLE `board`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `cpu`
--
ALTER TABLE `cpu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `evaluation`
--
ALTER TABLE `evaluation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `graphics`
--
ALTER TABLE `graphics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `hard_disk`
--
ALTER TABLE `hard_disk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `ram`
--
ALTER TABLE `ram`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `screen`
--
ALTER TABLE `screen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sell_web`
--
ALTER TABLE `sell_web`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `size_weight`
--
ALTER TABLE `size_weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD CONSTRAINT `evaluation_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `evaluation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`battery_id`) REFERENCES `battery` (`id`),
  ADD CONSTRAINT `product_ibfk_10` FOREIGN KEY (`size_and_weight_id`) REFERENCES `size_weight` (`id`),
  ADD CONSTRAINT `product_ibfk_11` FOREIGN KEY (`web_id`) REFERENCES `sell_web` (`id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`cpu_id`) REFERENCES `cpu` (`id`),
  ADD CONSTRAINT `product_ibfk_5` FOREIGN KEY (`graphics_id`) REFERENCES `graphics` (`id`),
  ADD CONSTRAINT `product_ibfk_6` FOREIGN KEY (`harddisk_id`) REFERENCES `hard_disk` (`id`),
  ADD CONSTRAINT `product_ibfk_7` FOREIGN KEY (`ram_id`) REFERENCES `ram` (`id`),
  ADD CONSTRAINT `product_ibfk_8` FOREIGN KEY (`screen_id`) REFERENCES `screen` (`id`),
  ADD CONSTRAINT `product_ibfk_9` FOREIGN KEY (`program_id`) REFERENCES `available_programs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
