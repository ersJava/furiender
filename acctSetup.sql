DROP DATABASE IF EXISTS  pet_profileDB;
CREATE database pet_profileDB; 

use pet_profileDB;

CREATE TABLE furinderProfile (
	profileName VARCHAR (100)NULL,
	id int null auto_increment,
	petName VARCHAR(100) NULL,
    locationByBoroughs VARCHAR(100) NULL,
    breed VARCHAR (100) NULL,
    weight INT NULL,
    age INT NULL,
    energy INT NULL,
    funFacts VARCHAR (100),
    favoriteFood VARCHAR(100), 
    favoriteToy VARCHAR(100),
    favoritePark VARCHAR(100),
    primary key(id)

);

CREATE TABLE userLogin(
	id INT NOT NULL auto_increment,
    username VARCHAR(100),
    email VARCHAR(100),
    userPassword VARCHAR(100),
    primary key(id)
   ); 

