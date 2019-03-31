USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP not null DEFAULT current_timestamp
    );