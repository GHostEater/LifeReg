-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2016 at 11:20 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `birth_reg`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `sn` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- --------------------------------------------------------

--
-- Table structure for table `birth_reg`
--

CREATE TABLE IF NOT EXISTS `birth_reg` (
  `sn` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `hair_colour` varchar(20) NOT NULL,
  `complexion` varchar(20) NOT NULL,
  `date_birth` date NOT NULL,
  `time_birth` time DEFAULT NULL,
  `father_name` varchar(60) NOT NULL,
  `father_address` text NOT NULL,
  `mother_name` varchar(60) NOT NULL,
  `mother_address` longtext,
  `hospital_id` int(11) NOT NULL,
  PRIMARY KEY (`sn`),
  KEY `hospital_id` (`hospital_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `death_reg`
--

CREATE TABLE IF NOT EXISTS `death_reg` (
  `sn` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `hair_colour` varchar(20) NOT NULL,
  `complexion` varchar(20) NOT NULL,
  `date_birth` date NOT NULL,
  `date_death` date NOT NULL,
  `time_death` time NOT NULL,
  `next_kin_name` varchar(60) NOT NULL,
  `next_kin_address` longtext NOT NULL,
  `hospital_id` int(11) NOT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Table structure for table `editor`
--

CREATE TABLE IF NOT EXISTS `editor` (
  `sn` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `date_birth` date NOT NULL,
  `hospital_id` int(11) NOT NULL,
  PRIMARY KEY (`sn`),
  KEY `hospital_id` (`hospital_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE IF NOT EXISTS `hospitals` (
  `sn` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `birth_reg`
--
ALTER TABLE `birth_reg`
  ADD CONSTRAINT `birth_reg_ibfk_1` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals` (`sn`);

--
-- Constraints for table `editor`
--
ALTER TABLE `editor`
  ADD CONSTRAINT `editor_ibfk_1` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals` (`sn`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
