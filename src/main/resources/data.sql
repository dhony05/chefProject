USE restapi;
INSERT INTO user( first_name, last_name, address, email, password, picture_url )
VALUES
( 'sai', 'allala', '410 S Randolphville Lane', 'sai.allala@hotmail.com', '', ''),
( 'sai', 'allala', '410 S Randolphville Lane', 'sai.allala@hotmail.com', '', ''),
( 'sai', 'allala', '410 S Randolphville Lane', 'sai.allala@hotmail.com', '', ''),
( 'sai', 'allala', '410 S Randolphville Lane', 'sai.allala@hotmail.com', '', ''),
( 'sai', 'allala', '410 S Randolphville Lane', 'sai.allala@hotmail.com', '', ''),
( 'sai', 'allala', '410 S Randolphville Lane', 'sai.allala@hotmail.com', '', ''),
( 'sai', 'allala', '410 S Randolphville Lane', 'sai.allala@hotmail.com', '', '');

INSERT INTO chef( first_name, last_name, address, picture_url, age, description, price, phone_number, email )
VALUES 
( 'chris', 'king', '2239 Chatterton Ave', '', 23, '', 100, '7187727273', 'da.chef.you.deserve@goodeats.com'),
( 'chris', 'king', '2239 Chatterton Ave', '', 23, '', 100, '7187727273', 'da.chef.you.deserve@goodeats.com'),
( 'chris', 'king', '2239 Chatterton Ave', '', 23, '', 100, '7187727273', 'da.chef.you.deserve@goodeats.com'),
( 'chris', 'king', '2239 Chatterton Ave', '', 23, '', 100, '7187727273', 'da.chef.you.deserve@goodeats.com'),
( 'chris', 'king', '2239 Chatterton Ave', '', 23, '', 100, '7187727273', 'da.chef.you.deserve@goodeats.com'),
( 'chris', 'king', '2239 Chatterton Ave', '', 23, '', 100, '7187727273', 'da.chef.you.deserve@goodeats.com'),
( 'chris', 'king', '2239 Chatterton Ave', '', 23, '', 100, '7187727273', 'da.chef.you.deserve@goodeats.com');

INSERT INTO category( name, chef_id )
VALUES 
( 'Italian', 1 ),
( 'Chinese', 2 ),
( 'Spanish', 4 );

INSERT INTO concern( name, description, email )
VALUES 
( 'Abe', 'Sucks, Fix it...', 'honest.abe@yahoo.org' );

