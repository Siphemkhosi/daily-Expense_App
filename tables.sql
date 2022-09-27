CREATE TABLE users(
    id SERIAL not Null  PRIMARY KEY,
    firstname VARCHAR(100) not Null,
    lastname VARCHAR(100) not Null,
    email  text 
    
);

CREATE TABLE categories(
id SERIAL not Null  PRIMARY KEY,
descriptions  VARCHAR(100) not Null
);

CREATE TABLE expense(
id SERIAL not Null  PRIMARY KEY,
firstname_id int not Null,
descriptions_id int not Null,
Amount  decimal not Null,
Dates DATE,

foreign key (firstname_id) references users(id),
foreign key (descriptions_id) references categories(id)

);
