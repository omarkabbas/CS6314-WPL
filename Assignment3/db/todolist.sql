-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 09, 2021 at 03:33 AM
-- Server version: 5.7.24
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
-- Database: `todolist`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_todo`
--

CREATE TABLE `tbl_todo` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(60) NOT NULL,
  `userid` int(11) NOT NULL,
  `isComplete` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_todo`
--

INSERT INTO `tbl_todo` (`id`, `title`, `description`, `userid`, `isComplete`) VALUES
(7, 'item 7 ', 'yessir', 1, 1),
(8, 'april 8th test', 'testing on april 8th yes sir', 1, 0),
(9, 'Thursday things', 'yes yes almost friday', 2, 1),
(10, '1', '1', 2, 1),
(11, '2', '2', 2, 1),
(12, '3', '3', 2, 1),
(13, '4', '4', 2, 1),
(15, '6', '6sssssssssssssssssssssssss', 2, 1),
(16, '7', '7', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `userid` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`userid`, `name`, `email`, `password`) VALUES
(1, 'user1', 'user1@gmail.com', '123'),
(2, 'user2', 'user2@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_todo`
--
ALTER TABLE `tbl_todo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_todo`
--
ALTER TABLE `tbl_todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
