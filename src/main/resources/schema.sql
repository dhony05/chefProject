USE restapi;
drop table if exists user;
drop table if exists category;
drop table if exists chef;
drop table if exists concern;

CREATE TABLE user
(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   first_name varchar (25) not null,
   last_name varchar (25),
   address varchar (50) not null,
   email varchar (40),
   password varchar (60) not null,
   picture_url varchar (60) not null
);
CREATE TABLE chef
(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   first_name varchar (25) not null,
   last_name varchar (25),
   address varchar (50) not null,
   picture_url varchar (200) not null,
   age int,
   description varchar (100),
   price int,
   phone_number varchar (12),
   email varchar (40)
);
CREATE TABLE category
(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   name varchar (25) not null,
   chef_id bigint,
   foreign key (chef_id) references chef(id)
);
CREATE TABLE concern
(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
   name varchar (25) not null,
   email varchar (40),
   description varchar (100)
);
