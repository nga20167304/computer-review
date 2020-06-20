-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 16, 2020 lúc 04:54 AM
-- Phiên bản máy phục vụ: 10.1.38-MariaDB
-- Phiên bản PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `computer_review`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `available_programs`
--

CREATE TABLE `available_programs` (
  `id` int(11) NOT NULL,
  `operating_system` varchar(255) NOT NULL,
  `used_by_software` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `available_programs`
--

INSERT INTO `available_programs` (`id`, `operating_system`, `used_by_software`) VALUES
(1, 'win10', 'microsoft'),
(2, 'win8', 'microsoft'),
(3, 'linux', 'linux'),
(4, 'ubuntu', 'linux'),
(5, 'win 10', 'microsoft'),
(6, '', ''),
(7, 'win 7', 'microsoft'),
(8, 'win 10', 'microsoft');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `battery`
--

CREATE TABLE `battery` (
  `id` int(11) NOT NULL,
  `species` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `battery`
--

INSERT INTO `battery` (`id`, `species`, `type`) VALUES
(1, ' 4800 mAh', ' Pin liền Lithium-ion polymer battery 7.4V - 2 cells\r\n'),
(2, ' 4800 mAh', ' Pin liền Lithium-ion polymer battery 7.4V - 2 cells\r\n'),
(3, '', ''),
(4, '111111mah', 'jfuiesrhgiusehr'),
(5, '10000mah', 'type');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `board`
--

CREATE TABLE `board` (
  `id` int(11) NOT NULL,
  `chip` varchar(255) NOT NULL,
  `bus` varchar(255) NOT NULL,
  `ram` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `board`
--

INSERT INTO `board` (`id`, `chip`, `bus`, `ram`) VALUES
(1, ' Tích hợp', ' PCI Express v2.0', ' 3GB (onboard RAM)'),
(2, ' Tích hợp', ' PCI Express v2.0', ' 3GB (onboard RAM)'),
(3, '', '', ''),
(4, '', '', ''),
(5, 'chip', 'bus', 'ram');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `brand`
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
(9, 'name', 'image');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cpu`
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
-- Đang đổ dữ liệu cho bảng `cpu`
--

INSERT INTO `cpu` (`id`, `brand`, `technology`, `type`, `speed`, `cache`, `max_speed`) VALUES
(1, ' Intel Celeron N3350', ' Celeron', ' N3350', ' 1.1 GHz', '2MB Cache', ' 2.4 GHz'),
(2, ' Intel Celeron N3350', ' Celeron', ' N3350', ' 1.1 GHz', '2MB Cache', ' 2.4 GHz'),
(3, '', '', '', '', '', ''),
(4, '', '', '', '', '', ''),
(5, 'brand', 'technologu', 'type', 'speed', 'cache', 'max speed');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `evaluation`
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
-- Cấu trúc bảng cho bảng `graphics`
--

CREATE TABLE `graphics` (
  `id` int(11) NOT NULL,
  `chipset` varchar(255) NOT NULL,
  `memory` varchar(255) NOT NULL,
  `design_style` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `graphics`
--

INSERT INTO `graphics` (`id`, `chipset`, `memory`, `design_style`) VALUES
(1, '0', '0', '0'),
(2, '', '', ''),
(3, '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hard_disk`
--

CREATE TABLE `hard_disk` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `hard_disk`
--

INSERT INTO `hard_disk` (`id`, `type`, `capacity`) VALUES
(1, '', ''),
(2, '', ''),
(3, '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `rating` int(11) DEFAULT '0',
  `description` mediumtext,
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
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `rating`, `description`, `image`, `web_id`, `brand_id`, `cpu_id`, `board_id`, `ram_id`, `harddisk_id`, `graphics_id`, `screen_id`, `program_id`, `battery_id`, `size_and_weight_id`, `security_id`, `created_at`, `updated_at`) VALUES
(2, 'Dell Inspirion 3459', '10000000', 0, 'fregregegre', 'img.png', NULL, 1, 1, 1, NULL, NULL, NULL, NULL, 4, 1, NULL, NULL, '2020-06-16 00:17:15', '2020-06-16 00:17:15'),
(3, 'Asus 1', '11111', 0, 'asasasaassasa', 'img.png', NULL, 6, 2, 2, NULL, NULL, NULL, NULL, 5, 2, NULL, NULL, '2020-06-15 17:42:10', '2020-06-15 17:42:10'),
(6, 'abc', '123', 3, 'abc', NULL, 1, 7, 3, 3, 1, 1, 1, 1, 6, 3, 1, NULL, '2020-06-16 02:19:26', '2020-06-16 02:19:26'),
(7, 'tttttt', '123', 5, 'tttttt', NULL, 2, 8, 4, 4, 2, 2, 2, 2, 7, 4, 2, NULL, '2020-06-16 02:22:26', '2020-06-16 02:22:26'),
(8, 'abc222', '222', 2, 'abc222', NULL, 3, 9, 5, 5, 3, 3, 3, 3, 8, 5, 3, NULL, '2020-06-16 02:44:04', '2020-06-16 02:44:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ram`
--

CREATE TABLE `ram` (
  `id` int(11) NOT NULL,
  `capacity` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `bus_speed` varchar(255) NOT NULL,
  `slots` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `ram`
--

INSERT INTO `ram` (`id`, `capacity`, `type`, `bus_speed`, `slots`) VALUES
(1, '', '', '', 0),
(2, '', '', '', 0),
(3, '', '', '', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `screen`
--

CREATE TABLE `screen` (
  `id` int(11) NOT NULL,
  `size` varchar(255) NOT NULL,
  `resolution` varchar(255) NOT NULL,
  `technology` varchar(255) NOT NULL,
  `sensor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `screen`
--

INSERT INTO `screen` (`id`, `size`, `resolution`, `technology`, `sensor`) VALUES
(1, '', '', '', ''),
(2, '', '', '', ''),
(3, '', '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sell_web`
--

CREATE TABLE `sell_web` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sell_web`
--

INSERT INTO `sell_web` (`id`, `name`, `image`, `link`) VALUES
(1, '', '', ''),
(2, '', '', ''),
(3, '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `size_weight`
--

CREATE TABLE `size_weight` (
  `id` int(11) NOT NULL,
  `size` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `size_weight`
--

INSERT INTO `size_weight` (`id`, `size`, `weight`, `material`) VALUES
(1, '', '', ''),
(2, '', '', ''),
(3, '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`) VALUES
(7, 'abcabcabcabcabcabcabc', 'do@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '/uploads/a7316d5e9b978e409fd4bae48fb834b6');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `web_communication`
--

CREATE TABLE `web_communication` (
  `id` int(8) NOT NULL,
  `web_communication` varchar(255) NOT NULL,
  `function` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `available_programs`
--
ALTER TABLE `available_programs`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `battery`
--
ALTER TABLE `battery`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `board`
--
ALTER TABLE `board`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cpu`
--
ALTER TABLE `cpu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `graphics`
--
ALTER TABLE `graphics`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hard_disk`
--
ALTER TABLE `hard_disk`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
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
-- Chỉ mục cho bảng `ram`
--
ALTER TABLE `ram`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `screen`
--
ALTER TABLE `screen`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sell_web`
--
ALTER TABLE `sell_web`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `size_weight`
--
ALTER TABLE `size_weight`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `available_programs`
--
ALTER TABLE `available_programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `battery`
--
ALTER TABLE `battery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `board`
--
ALTER TABLE `board`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `cpu`
--
ALTER TABLE `cpu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `evaluation`
--
ALTER TABLE `evaluation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `graphics`
--
ALTER TABLE `graphics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `hard_disk`
--
ALTER TABLE `hard_disk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `ram`
--
ALTER TABLE `ram`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `screen`
--
ALTER TABLE `screen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `sell_web`
--
ALTER TABLE `sell_web`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `size_weight`
--
ALTER TABLE `size_weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `evaluation`
--
ALTER TABLE `evaluation`
  ADD CONSTRAINT `evaluation_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `evaluation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `product`
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
