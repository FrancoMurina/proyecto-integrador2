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
  KEY `products_ibfk_1` (`userId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Nike Jordan High OG','imagen',NULL,'2018-03-03 03:00:00',NULL),(2,2,'Nike Jordan High GG','imagen',NULL,'2019-04-04 03:00:00',NULL),(3,3,'Nike Jordan Retro OG','imagen',NULL,'2017-05-05 03:00:00',NULL),(4,4,'Nike Jordan Mid Crimson','imagen',NULL,'2016-06-05 03:00:00',NULL),(5,5,'Zapatilla5','imagen',NULL,'2020-07-07 03:00:00',NULL),(6,1,'Zapatilla6','imagen',NULL,'2015-04-09 03:00:00',NULL),(7,2,'Zapatilla7','imagen',NULL,'2021-01-01 03:00:00',NULL),(8,3,'Zapatilla8','imagen',NULL,'2020-09-09 03:00:00',NULL),(9,4,'Zapatilla9','imagen',NULL,'2017-03-08 03:00:00',NULL),(10,5,'Zapatilla10','imagen',NULL,'2016-08-10 03:00:00',NULL),(11,1,'zapatilla de prueba','imagen de prueba',NULL,'2021-05-12 03:00:00',NULL),(12,2,'zapatilla de prueba2','imagen de prueba2',NULL,'2021-05-12 03:00:00',NULL),(13,3,'zapatilla de prueba3','Screen Shot 2021-05-03 at 18.00.41.png',NULL,'2021-05-24 20:40:24','2021-05-24 20:40:24'),(14,19,'nada','img-1624026227064.png','cambio la descripcion','2021-06-08 18:31:41','2021-06-18 14:23:47'),(16,19,'probando nueva zapatilla333','img-1623844004680.png','Nuevo producto de prueba','2021-06-16 11:46:44','2021-06-16 11:46:44'),(17,19,'nueva zapatilla','img-1623967155293.png','probando una nueva zapatilla22','2021-06-17 21:59:15','2021-06-22 22:54:19');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
