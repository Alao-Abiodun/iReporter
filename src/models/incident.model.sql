CREATE TABLE incidents(
                        id int PRIMARY KEY AUTO_INCREMENT,
                        createdBy timestamp NOT NULL,
                        createdOn timestamp NOT NULL,
                        type enum('red-flag', 'intervention') NOT NULL,
                        location varchar(30) NOT NULL,
                        status enum('draft', 'under investigation', 'resolved', 'rejected') NOT NULL,
                        images varchar(260) NOT NULL,
                        videos varchar(260) NOT NULL,
                        comment varchar(60) NOT NULL, 
                        userId int, 
                        CONSTRAINT fk_user
                        FOREIGN KEY (userId)
                                REFERENCES users(id)
);