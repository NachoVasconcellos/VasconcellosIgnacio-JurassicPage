# 1- Crear base de datos para el ecommerce
# 2- Crear tabla productos
# 3- Insertar al menos 5 una fila en tabla productos
# 4- Crear tabla Usuarios
# 5- Insertar al menos una fila tabla Usuarios
# 6- Opcional: Crear una tabla que se pueda relacionar con alguna de las dos, para agregar clave foranea

CREATE DATABASE ECOMMERCE;
USE ECOMMERCE;

CREATE TABLE productos (
    Id INT AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(30),
    Price DECIMAL(10 , 2 ),
    Categoria_id INT,
    PRIMARY KEY (Id)
);

INSERT INTO productos (Nombre, Price) VALUES
("Darth Vader", 2000.00),
("R2-D2", 1599.00),
("Luke Skywalker", 2000.00),
("T-Rex JP1", 2500.00),
("Neytiry", 2000.00);

CREATE TABLE Usuarios (
    Id INT AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(30),
    Apellido VARCHAR(30),
    Email VARCHAR(30),
    PRIMARY KEY (Id)
);

INSERT INTO Usuarios (Nombre, Apellido, Email) VALUES
("Ignacio", "Vasconcellos", "nachovasconcellos@gmail.com");

CREATE TABLE Categorias (
    Id INT AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(30),
    PRIMARY KEY (id)
);
INSERT INTO Categorias (Nombre) VALUES ("Star Wars");
ALTER TABLE Productos ADD FOREIGN KEY (Categoria_id) REFERENCES Categorias(id);

SELECT * FROM productos;
SELECT * FROM usuarios;

SELECT * FROM productos INNER JOIN Categorias ON productos.Categoria_id=Categorias.id;
