DROP DATABASE IF EXISTS CMS_DB;
CREATE DATABASE CMS_DB;

USE CMS_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary INT(10.2) NOT NULL,
  dapartment_id INT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),NOT NULL,
  last_name VARCHAR(30),NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);
