CREATE TABLE users(id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
                  firstname varchar(30) NOT NULL, 
                  lastname varchar(30) NOT NULL,
                  othernames varchar(30) NOT NULL,
                  email varchar(30) NOT NULL UNIQUE,
                  password varchar(30) NOT NULL,
                  phonenumber varchar(30) NOT NULL,
                  username varchar(30) NOT NULL,
                  registered boolean NOT NULL DEFAULT 0,
                  role varchar(30) NOT NULL DEFAULT 'ROL-USER'
                  );