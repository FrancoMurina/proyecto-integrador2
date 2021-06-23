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
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `coments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `coments_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coments`
--

LOCK TABLES `coments` WRITE;
/*!40000 ALTER TABLE `coments` DISABLE KEYS */;
INSERT INTO `coments` VALUES (1,1,1,'Que buena zapatilla1','2018-03-11 03:00:00','2021-05-19 15:19:34'),(2,2,2,'Que buena zapatilla2','2019-04-22 03:00:00','2021-05-19 15:19:34'),(3,3,3,'Que buena zapatilla3','2017-05-10 03:00:00','2021-05-19 15:19:34'),(4,4,4,'Que buena zapatilla4','2016-06-09 03:00:00','2021-05-19 15:19:34'),(5,16,19,'probando comentario','2021-06-16 15:42:19','2021-06-16 15:42:19'),(6,16,19,'no me gusto','2021-06-16 15:58:42','2021-06-16 15:58:42'),(7,16,19,'','2021-06-16 16:05:46','2021-06-16 16:05:46'),(8,16,19,'no','2021-06-16 16:07:07','2021-06-16 16:07:07'),(9,17,19,'hola','2021-06-17 22:27:30','2021-06-17 22:27:30'),(10,16,19,'holaa','2021-06-17 22:30:01','2021-06-17 22:30:01'),(11,17,19,'chau','2021-06-17 22:32:44','2021-06-17 22:32:44'),(12,17,19,'no','2021-06-17 22:34:49','2021-06-17 22:34:49'),(13,5,19,'si','2021-06-18 13:55:13','2021-06-18 13:55:13'),(14,5,19,'no','2021-06-18 13:55:15','2021-06-18 13:55:15'),(15,13,19,'Muy buen producto','2021-06-22 22:57:00','2021-06-22 22:57:00'),(16,8,19,',hgdridytcity','2021-06-22 22:59:43','2021-06-22 22:59:43'),(17,8,19,'kgctyic','2021-06-22 22:59:47','2021-06-22 22:59:47');
/*!40000 ALTER TABLE `coments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-23  9:50:37
