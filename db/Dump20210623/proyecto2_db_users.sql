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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'MariaGonzales','mariagonzales@gmail.com',NULL,2005555,'1997-02-02','contraseña1',NULL,NULL),(2,'AlexiaAlurralde','alealurralde@gmail.com',NULL,217770,'2001-03-03','contraseña2',NULL,NULL),(3,'NoelRusso','noerusso@gmail.com',NULL,208885,'2003-05-05','contraseña3',NULL,NULL),(4,'FrancoMurina','francomurina@gmail.com',NULL,2487580,'1993-06-06','contraseña4',NULL,NULL),(5,'TomasFernandez','tomasfernandez@gmail.com',NULL,2375780,'1988-01-01','contraseña5',NULL,NULL),(6,'fmurina','fmurina@udesa.edu.ar',NULL,1157508300,'2021-05-07','franco1,franco1',NULL,NULL),(7,'fmurina1','franmurina@yahoo.com',NULL,47831110,'2021-05-02','franco2',NULL,NULL),(8,'pep','murina@udesa.edu.ar',NULL,3054982874,'2021-05-06','murina',NULL,NULL),(9,'franco4','fmurina@udesai.com',NULL,12324342,'2021-05-18','123456',NULL,NULL),(10,'nombre1','nombre1@yahoo.com',NULL,1234567890,'2021-05-28','09876',NULL,NULL),(11,'nombre3','nombre3@udesa.edu.ar',NULL,987654321,'2021-05-08','$2a$10$J0D.Ch3WmSc82h6CoKgetu1pBodupRfR4CJ5xgUx5DsNZdxYdjYQG',NULL,NULL),(12,'Franco7','franco2murina@udesa.edu.ar',NULL,1234352635,'2021-05-04','$2a$10$AzrXHvw47thNjjrHripbw.8cUU6o4nl2p/HNAGZw8FDues8wXMWdS',NULL,NULL),(13,'franco8','franco3murina@udesa.edu.ar',NULL,123456786,'2021-02-11','$2a$10$7s8HToBQ5FAD88eFNkVFbetdQoeWaZ/M1CPPX5/AvDWjMMh2/YSQC',NULL,NULL),(14,'franco9','frnaocmurina9@nada.com',NULL,543245242,'2021-02-05','$2a$10$sPGsDRBJS5wvHhCaROzXi.cCweljnD3wxvxmDZL4kMHv53gFILNM.',NULL,NULL),(15,'franco11','frnaocmurina11@nada.com',NULL,987365423,'2021-02-05','$2a$10$nvk7GI1n5GrrwR00MYytA.0/5YC4DEAXEVkrHJRUNkW/Q3jRGCTnG',NULL,NULL),(16,'franco12','f12@ymail.com',NULL,1157508300,'2021-06-02','$2a$10$1E90bfZa0jTgpQDyiQnIh.wq/Dpz1t7pZbQjk2XWOF3f1vmjBv3Fa','2021-05-31 21:30:53','2021-05-31 21:30:53'),(17,'franco13','f13@ymail.com',NULL,1157508300,'2021-06-06','$2a$10$S6FtMkjilNX4Xatfm5tlnOhMDB4tbVBXJ56xXlgZ38PfCK.1lycuK','2021-05-31 22:38:17','2021-05-31 22:38:17'),(18,'f14','f14@ymail.com',NULL,47831110,'2021-06-04','$2a$10$S5kydMDm1jD0OoYPF5iySuLuePMySYV.h9Zanv04OZAUHU2fwS/96','2021-05-31 22:49:52','2021-05-31 22:49:52'),(19,'f15','f15@ymail.com','userimg-1623678908084.png',1157508300,'2021-06-16','$2a$10$HX2f4MjCGdJXHq501VmnkuGkudsLFMZPs32.7A8uWCzBjXUFMC5dG','2021-06-02 15:10:24','2021-06-14 13:55:08'),(20,'f16','f16@ymail.com',NULL,1157508300,'2021-06-12','$2a$10$O8NKzMwymv0YYd2WyAlYtex7NJPG2szzCWWeKYSwxAkOwn3ngomY.','2021-06-02 18:48:17','2021-06-02 18:48:17'),(21,'f17','f17@ymail.com',NULL,47831110,'2021-06-11','$2a$10$cQA5E7YvDxB6dr6COWIRLuamdmnZcW3.LuGoo6Wlk45M.NcrxlnX6','2021-06-02 18:57:02','2021-06-02 18:57:02'),(22,'f18','f18@ymail.com','userimg-1623855412228.png',12345678,'2021-06-17','$2a$10$.nZBSj9LTqwGATpX4oUGCuyrYV4pElfDjZqrekiHce8i3/Evpt74u','2021-06-16 14:56:52','2021-06-16 14:56:52');
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

-- Dump completed on 2021-06-23  9:50:37
