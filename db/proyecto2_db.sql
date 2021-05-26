CREATE SCHEMA proyecto2_db;
USE proyecto2_db;

-- Creamos las tablas

CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR (255) NOT NULL, 
    email VARCHAR(255) NOT NULL,
    phoneNumber INT UNSIGNED NOT NULL,
    dateOfBirth DATE,
	password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);

CREATE TABLE products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	userId INT UNSIGNED NOT NULL,
    productName VARCHAR (255) NOT NULL, 
    img VARCHAR (255) NOT NULL, 
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE coments (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	productId INT UNSIGNED NOT NULL,
	userId INT UNSIGNED NOT NULL,
    textoComentario VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (productId) REFERENCES products(id)
);

-- Insertamos los datos

INSERT INTO users
	VALUES (DEFAULT, 'MariaGonzales','mariagonzales@gmail.com', 2005555 , '1997-02-02', 'contraseña1'),
		   (DEFAULT, 'AlexiaAlurralde','alealurralde@gmail.com', 217770, '2001-03-03', 'contraseña2'), 
           (DEFAULT, 'NoelRusso','noerusso@gmail.com',208885, '2003-05-05', 'contraseña3'), 
		   (DEFAULT, 'FrancoMurina','francomurina@gmail.com', 2487580 , '1993-06-06', 'contraseña4'), 
		   (DEFAULT, 'TomasFernandez','tomasfernandez@gmail.com', 2375780, '1988-01-01', 'contraseña5');
           
INSERT INTO products
	VALUES (DEFAULT, 1, 'Nike Jordan High OG', 'imagen', '2018-03-03'),
		   (DEFAULT, 2, 'Nike Jordan High GG', 'imagen', '2019-04-04'),
           (DEFAULT, 3, 'Nike Jordan Retro OG', 'imagen', '2017-05-05'),
           (DEFAULT, 4, 'Nike Jordan Mid Crimson', 'imagen', '2016-06-05'),
           (DEFAULT, 5, 'Zapatilla5', 'imagen', '2020-07-07'),
           (DEFAULT, 1, 'Zapatilla6', 'imagen', '2015-04-09'),
           (DEFAULT, 2, 'Zapatilla7', 'imagen', '2021-01-01'),
           (DEFAULT, 3, 'Zapatilla8', 'imagen', '2020-09-09'),
           (DEFAULT, 4, 'Zapatilla9', 'imagen', '2017-03-08'),
           (DEFAULT, 5, 'Zapatilla10', 'imagen','2016-08-10');

INSERT INTO coments
	VALUES (DEFAULT, 1, 1, 'Que buena zapatilla1', '2018-03-11'),
		   (DEFAULT, 2, 2, 'Que buena zapatilla2', '2019-04-22'),
           (DEFAULT, 3, 3, 'Que buena zapatilla3', '2017-05-10'),
           (DEFAULT, 4, 4, 'Que buena zapatilla4', '2016-06-09');
