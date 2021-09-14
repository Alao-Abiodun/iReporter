CREATE TABLE users(id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
                  firstname varchar(30) NOT NULL, 
                  lastname varchar(30) NOT NULL,
                  othernames varchar(30) NOT NULL,
                  email varchar(30) NOT NULL UNIQUE,
                  phonenumber varchar(30) NOT NULL,
                  username varchar(30) NOT NULL,
                  registered boolean NOT NULL DEFAULT 0,
                  isAdmin boolean NOT NULL DEFAULT 0
                  );