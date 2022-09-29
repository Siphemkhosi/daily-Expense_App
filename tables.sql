CREATE TABLE users(
    id SERIAL not Null  PRIMARY KEY,
    username VARCHAR(100) not Null,
    contact VARCHAR(10) not Null,
    email  text 
    
);

CREATE TABLE categories(
id SERIAL not Null  PRIMARY KEY,
descriptions  VARCHAR(100) not Null
);

CREATE TABLE expenses(
id SERIAL not Null  PRIMARY KEY,
username_id int,
descriptions_id int,
Amount  decimal not Null,
Dates DATE,
item_name VARCHAR(100) not Null,

foreign key (username_id) references users(id),
foreign key (descriptions_id) references categories(id)

);
