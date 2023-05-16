CREATE DATABASE dakee;

use dakee;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    name varchar(255) NOT NULL,
    password varchar(255) NOT NULL
)

INSERT INTO users (email,name,password) VALUES
	 ('johndoe@email.com','John Doe','supersecret1234'),
	 ('Superguy@smith.com','John Smith','12344321');
