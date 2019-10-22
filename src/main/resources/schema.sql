USE restapi;
CREATE TABLE user
(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   first_name varchar (25) not null,
   last_name varchar (25),
   address varchar (50) not null,
   email varchar (25),
   password varchar (25) not null
);
CREATE TABLE chef
(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   first_name varchar (25) not null,
   last_name varchar (25),
   address varchar (50) not null
);