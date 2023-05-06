/* Creación de Base de datos y tablas para la aplicación CONTROLLING */

CREATE DATABASE controlling CHARSET UTF8;
USE controlling;

CREATE TABLE Usuario (
    idUsuario INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    alias VARCHAR(20) NOT NULL,
    contrasenia VARCHAR(30) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    registrado TINYINT(1) NOT NULL,
    pais VARCHAR(30)
);

CREATE TABLE Activo (
    idActivo INT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_activo VARCHAR(30) NOT NULL,
    simbolo VARCHAR(30) NOT NULL,
    moneda VARCHAR(15) NOT NULL,
    operador VARCHAR(30) NOT NULL
);

CREATE TABLE Cartera (
    idCartera INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_Usuario INT(11) UNSIGNED NOT NULL,
    FOREIGN KEY (id_Usuario)
        REFERENCES Usuario (idUsuario)
        ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE Operacion (
    idOperacion INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cartera INT(11) UNSIGNED NOT NULL,
    id_activo INT(20) UNSIGNED NOT NULL,
    cantidad FLOAT NOT NULL,
    precio_compra FLOAT NOT NULL,
    fecha_compra DATE NOT NULL,
    precio_venta FLOAT,
    fecha_venta DATE,
    beneficio FLOAT,
    FOREIGN KEY (id_cartera)
        REFERENCES Cartera (idCartera)
        ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (id_activo)
        REFERENCES Activo (idActivo)
        ON DELETE RESTRICT ON UPDATE RESTRICT
)














