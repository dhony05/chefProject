USE restapi;
drop table if exists user;
drop table if exists chef;
CREATE TABLE user
(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   first_name varchar (25) not null,
   last_name varchar (25),
   address varchar (50) not null,
   email varchar (25),
   password varchar (60) not null,
   picture_url varchar (60) not null
);
CREATE TABLE chef
(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   first_name varchar (25) not null,
   last_name varchar (25),
   address varchar (50) not null,
   picture_url varchar (60) not null
   
);