-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema reservas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema reservas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `reservas` DEFAULT CHARACTER SET utf8mb4 ;
USE `reservas` ;

-- -----------------------------------------------------
-- Table `reservas`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservas`.`clientes` (
  `idClientes` INT NOT NULL,
  `cedula` VARCHAR(45) NULL,
  `nombres` VARCHAR(75) NULL,
  `departamento` VARCHAR(75) NULL,
  `cargo` VARCHAR(75) NULL,
  PRIMARY KEY (`idClientes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reservas`.`salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservas`.`salas` (
  `idSalas` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `ubicacion` VARCHAR(45) NULL,
  PRIMARY KEY (`idSalas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reservas`.`reservas_salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservas`.`reservas_salas` (
  `idReservas` INT NOT NULL,
  `fecha` DATE NULL,
  `horaInicio` DATETIME NULL,
  `horaFin` DATETIME NULL,
  `estado` VARCHAR(45) NULL,
  `motivo` VARCHAR(300) NULL,
  `fk_idClientes` INT NOT NULL,
  `fk_idSalas` INT NOT NULL,
  PRIMARY KEY (`idReservas`),
  CONSTRAINT `fk_idClientes`
    FOREIGN KEY (`fk_idClientes`)
    REFERENCES `reservas`.`clientes` (`idClientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idSalas`
    FOREIGN KEY (`fk_idSalas`)
    REFERENCES `reservas`.`salas` (`idSalas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reservas`.`administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservas`.`administrador` (
  `idAdministrador` INT NOT NULL,
  `cedula` VARCHAR(45) NULL,
  `nombres` VARCHAR(45) NULL,
  `cargo` VARCHAR(45) NULL,
  `rol` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`idAdministrador`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
