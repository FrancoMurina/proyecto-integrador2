CREATE DATABASE  IF NOT EXISTS `proyecto2_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyecto2_db`;
-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto2_db
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coments`
--

DROP TABLE IF EXISTS `coments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `textoComentario` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `coments_ibfk_1` (`userId`),
  KEY `coments_ibfk_2` (`productId`),
  CONSTRAINT `coments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `coments_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coments`
--

LOCK TABLES `coments` WRITE;
/*!40000 ALTER TABLE `coments` DISABLE KEYS */;
INSERT INTO `coments` VALUES (19,26,11,'Que buena zapatilla!','2021-06-25 17:15:24','2021-06-25 17:15:24'),(20,26,12,'No me gusta','2021-06-25 17:16:37','2021-06-25 17:16:37'),(21,28,12,'Me gusta','2021-06-25 17:19:00','2021-06-25 17:19:00'),(22,27,13,'Esta buena','2021-06-25 17:21:03','2021-06-25 17:21:03'),(23,26,13,'Me encanta!','2021-06-25 17:21:34','2021-06-25 17:21:34'),(24,30,13,'Feo color','2021-06-25 17:21:52','2021-06-25 17:21:52'),(25,28,13,'Esta buena','2021-06-25 17:22:12','2021-06-25 17:22:12'),(26,29,13,'No me gusta','2021-06-25 17:24:14','2021-06-25 17:24:14'),(27,28,14,'Buenisima','2021-06-25 17:25:51','2021-06-25 17:25:51'),(28,29,14,'Tampoco me gusta','2021-06-25 17:26:05','2021-06-25 17:26:05'),(29,27,14,'Me encanta!','2021-06-25 17:26:20','2021-06-25 17:26:20'),(30,32,11,'Buenisima','2021-06-25 17:34:24','2021-06-25 17:34:24'),(31,31,11,'Me gusta!','2021-06-25 17:34:33','2021-06-25 17:34:33'),(32,30,15,'Esta buena','2021-06-25 17:37:25','2021-06-25 17:37:25'),(33,33,15,'No me gusta','2021-06-25 17:41:42','2021-06-25 17:41:42'),(34,27,15,'No me gusta','2021-06-25 17:41:57','2021-06-25 17:41:57'),(35,28,15,'No me gusta','2021-06-25 17:42:25','2021-06-25 17:42:25');
/*!40000 ALTER TABLE `coments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL,
  `productName` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (26,10,'Nike Jordan High OG','img-1624641077701.jpg','Zapatilla sin usar ','2021-06-25 17:11:17','2021-06-25 17:11:17'),(27,10,'Nike Jordan High GG','img-1624641114120.jpg','Zapatilla usada','2021-06-25 17:11:54','2021-06-25 17:11:54'),(28,11,'Nike Jordan Retro OG','img-1624641304667.jpg','Zapatilla barata','2021-06-25 17:14:50','2021-06-25 17:15:04'),(29,12,'Nike Jordan Mid Crimson','img-1624641511097.jpg','Zapatilla buena calidad','2021-06-25 17:18:31','2021-06-25 17:18:31'),(30,12,'Nike Jordan MH','img-1624641588486.jpg','Zapatilla usada','2021-06-25 17:19:48','2021-06-25 17:19:48'),(31,13,'Nike Jordan LM','img-1624641788482.jpg','Zapatilla hecha por mi','2021-06-25 17:22:45','2021-06-25 17:23:15'),(32,14,'Nike Flight Legacy','img-1624642212834.png','Nueva edicion','2021-06-25 17:28:54','2021-06-25 17:30:12'),(33,11,'Nike Jordan Mid Air','img-1624642437798.png','Zapatillas air','2021-06-25 17:33:57','2021-06-25 17:33:57'),(34,15,'Nike Jordan Mid Royal OG','img-1624642891064.png','Zapatilla mid royal azul y naranja','2021-06-25 17:40:24','2021-06-25 17:41:31');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `userimg` varchar(45) DEFAULT NULL,
  `phoneNumber` int(10) unsigned NOT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'Lucia Alvarez','lucia.alvarez@dh.com','userimg-1624640657353.jpg',112233445,'2021-06-06','$2a$10$VAWiJCro81yBReZz4H/i4ujdMxTla63PGGlF2n5dqZd.XVnC1NytS','2021-06-20 14:55:18','2021-06-25 17:04:17'),(11,'Alexia Alurralde','alexia@dh.com','userimg-1624641252226.png',113367290,'2005-03-03','$2a$10$VPi.FiOKkbcTF4BPVImJLOs3JtE50ssNcwtQJCiiDrbdhgrDogNS2','2021-06-25 17:13:08','2021-06-25 17:14:12'),(12,'Franco Murina','franco.murina@dh.com','userimg-1624641476695.png',11772836,'1998-07-08','$2a$10$IVcj1dng9IWloBinMikCtOAzWqfJZL7sWSuDs9.VbuMX/lcDtutTS','2021-06-25 17:16:14','2021-06-25 17:17:56'),(13,'Noel Russo','noel.russo@dh.com','userimg-1624641644427.jpg',116672926,'2000-01-06','$2a$10$wHbbREyxnDE2FJcd3WVDyuwXydp8gfIlGY2RyybLEhVZyaCfHReGa','2021-06-25 17:20:44','2021-06-25 17:20:44'),(14,'Juan Perez','juan.perez@hotmail.com','userimg-1624641933737.jpg',156826297,'1995-08-25','$2a$10$mKrJXIm1gc1LGF0O2DXrg.vFK8DqpAfPBCbM9M.zukNgP.UvRaw1G','2021-06-25 17:25:33','2021-06-25 17:25:33'),(15,'Maria Gonzales','mariagonzales@gmail.com','userimg-1624642579663.jpg',1689922,'2014-12-25','$2a$10$OMOWNxrSyW6lupxtMF.kC.soNfS2hg9iSDy/8gh7vdopy28c81LWO','2021-06-25 17:36:19','2021-06-25 17:36:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-27 11:59:25
