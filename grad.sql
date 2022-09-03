-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2022 at 02:09 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grad`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(40) NOT NULL,
  `book_name` varchar(100) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `book_name`, `location`) VALUES
(1, 'Madd - L (Prod by Famillionaire).mp3', 'audio/Madd - L (Prod by Famillionaire).mp3.mp3'),
(3, 'Khaled Essam - W Eh Yaany  خالد.mp3', 'audio/Khaled Essam - W Eh Yaany  خالد.mp3.mp3'),
(4, 'Dua Lipa - Levitating (Egypt Version) دعاء لبة - مستكنيصه.mp3', 'audio/Dua Lipa - Levitating (Egypt Version) دعاء لبة - مستكنيصه.mp3.mp3'),
(5, 'Albumaty.Com_bhaa_sltan_aamlyn_alsh.mp3', 'audio/Albumaty.Com_bhaa_sltan_aamlyn_alsh.mp3.mp3'),
(6, 'Stromae - Alors On Danse ( Slowed To Perfection ).mp3', 'audio/Stromae - Alors On Danse ( Slowed To Perfection ).mp3.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `name`, `email`, `comment`) VALUES
(1, '', 'zoz1@gmail.com', ''),
(2, '', '', 'NEW COMMENT'),
(3, '', '', '2'),
(4, '', '', '1'),
(5, '', 'zoz1@gmail.com', ''),
(6, '', 'zoz1@gmail.com', ''),
(7, '', 'zoz1@gmail.com', ''),
(8, '', 'zoz1@gmail.com', ''),
(9, '', '', 'new comment'),
(10, '', '', '12321'),
(11, '', 'zoz1@gmail.com', ''),
(12, '', 'zoz1@gmail.com', ''),
(13, '', 'zoz1@gmail.com', ''),
(14, '', 'zoz1@gmail.com', ''),
(15, '', 'zoz1@gmail.com', ''),
(16, '', 'zoz1@gmail.com', ''),
(17, '', 'zoz1@gmail.com', ''),
(18, '', '', 'comment'),
(19, '', 'zoz1@gmail.com', ''),
(20, '', '', '23'),
(21, '', 'zoz1@gmail.com', ''),
(22, '', 'zoz1@gmail.com', ''),
(23, '', 'zoz1@gmail.com', '');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  `donation` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `image` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `FullName` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(45) NOT NULL,
  `state` varchar(20) NOT NULL,
  `ZipCode` int(40) NOT NULL,
  `Nameoncard` int(20) NOT NULL,
  `CardNumber` int(40) NOT NULL,
  `expmonth` varchar(30) NOT NULL,
  `expyear` int(20) NOT NULL,
  `cvv` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`FullName`, `email`, `Address`, `City`, `state`, `ZipCode`, `Nameoncard`, `CardNumber`, `expmonth`, `expyear`, `cvv`) VALUES
('mark', '0', '59', '44338', 'e662a8a11ea50893333f', 0, 8, 8542516, 'fa27ef3ef6570e32a79e74deca7c1b', 312351, 81),
('mark', 'fzmiko@gmail.com', '59da944dea1c042dd08376ea646be3bf', '044338ac271b2d34fbbad1d33fb4e6e8', 'e662a8a11ea50893333f', 0, 8, 8542516, 'fa27ef3ef6570e32a79e74deca7c1b', 312351, 81),
('mark', '1@gmailcom', 'f4fe215e3e20c83caa4b624dc24bbaf7', '044338ac271b2d34fbbad1d33fb4e6e8', 'e662a8a11ea50893333f', 0, 0, 4297, 'fa27ef3ef6570e32a79e74deca7c1b', 3, 202),
('mark', 'm@gmailcom', '044338ac271b2d34fbbad1d33fb4e6e8', 'e662a8a11ea50893333fb06d7654416d', 'a73d18446f20a30be28c', 202, 0, 4297, 'fa27ef3ef6570e32a79e74deca7c1b', 3, 202),
('mark', 'mark@gmailcom', '044338ac271b2d34fbbad1d33fb4e6e8', 'e662a8a11ea50893333fb06d7654416d', 'a73d18446f20a30be28c', 202, 0, 4297, 'fa27ef3ef6570e32a79e74deca7c1b', 3, 202),
('mark', 's@s.com', '044338ac271b2d34fbbad1d33fb4e6e8', 'e662a8a11ea50893333fb06d7654416d', 'a73d18446f20a30be28c', 202, 0, 4297, 'fa27ef3ef6570e32a79e74deca7c1b', 3, 202),
('mark', '1@gmailomc', '044338ac271b2d34fbbad1d33fb4e6e8', 'e662a8a11ea50893333fb06d7654416d', 'a73d18446f20a30be28c', 202, 0, 4297, 'fa27ef3ef6570e32a79e74deca7c1b', 3, 202);

-- --------------------------------------------------------

--
-- Table structure for table `rides`
--

CREATE TABLE `rides` (
  `id` int(10) NOT NULL,
  `location` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `departure_time` float NOT NULL,
  `arrival_time` float NOT NULL,
  `plate_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rides`
--

INSERT INTO `rides` (`id`, `location`, `destination`, `departure_time`, `arrival_time`, `plate_number`) VALUES
(40, 'Dep.place', 'Final Location', 0, 2022, ''),
(41, 'text1', 'text2', 0, 2022, ''),
(42, 'from', 'to', 0, 2022, ''),
(43, 'from', 'to', 0, 2022, ''),
(44, '12', '12', 0, 2022, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`) VALUES
(1, 'ahmed', 'ahmed2000@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(2, 'ahmed', 'ahmed@gmail.com', 'a9161560c7cc6b5301c00d793daf8720'),
(3, 'mark', 'markfady9@gmail.com', '123'),
(4, 'Mark', 'markfady9@gmail.com', '321'),
(5, '', 'markfady74@gmail.com', '550a141f12de6341fba65b0ad0433500'),
(6, '', 'markfady74@gmail.com', '550a141f12de6341fba65b0ad0433500'),
(7, 'Mark', 'newemail', '827ccb0eea8a706c4c34a16891f84e7b'),
(8, 'zoz', 'zoz@gmail.com', '202cb962ac59075b964b07152d234b70'),
(9, 'zoz', 'zoz1@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(10, '', '', ''),
(11, '', '', ''),
(12, 'Mark', 'newemail@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(13, 'Mark', 'newemil@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(14, 'Mark', 'email@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(15, 'Mark', '2', 'c4ca4238a0b923820dcc509a6f75849b'),
(16, '', 'newww@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(17, '', 'newww1@gmail.com', '1bbd886460827015e5d605ed44252251'),
(18, '', 'newwwww@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(19, 'Mark', 'newewe@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(20, 'Mark', 'new3@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(21, 'Mark', 'zoz2@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(22, 'Mark', 'zoz3@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(23, 'Mark', 'markfady8@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f'),
(24, 'Mark', 'markfady90@gmail.com', 'b0baee9d279d34fa1dfd71aadb908c3f');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `video_id` int(10) NOT NULL,
  `video_name` varchar(400) NOT NULL,
  `location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`video_id`, `video_name`, `location`) VALUES
(8, '5 Second Video_ Watch the Milky Way Rise.mp4', 'video/5 Second Video_ Watch the Milky Way Rise.mp4.mp4'),
(9, '5 Second Video_ Watch the Milky Way Rise.mp4', 'video/5 Second Video_ Watch the Milky Way Rise.mp4.mp4'),
(10, '5 Second Video_ Watch the Milky Way Rise.mp4', 'video/5 Second Video_ Watch the Milky Way Rise.mp4.mp4'),
(11, '5 Second Video_ Watch the Milky Way Rise.mp4', 'video/5 Second Video_ Watch the Milky Way Rise.mp4.mp4'),
(12, '5 Second Video_ Watch the Milky Way Rise.mp4', 'video/5 Second Video_ Watch the Milky Way Rise.mp4.mp4'),
(13, '5 Second Video_ Watch the Milky Way Rise.mp4', 'video/5 Second Video_ Watch the Milky Way Rise.mp4.mp4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rides`
--
ALTER TABLE `rides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`video_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `rides`
--
ALTER TABLE `rides`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `video_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
