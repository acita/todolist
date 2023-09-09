# A simple todo list API in JavaScript!

## Dependencies

To run is necessary a MySQL instance. If you use Docker just runs in your terminal:

``````
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
``````
And create a database and table tasks with script:

``````
CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE tasks(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(45) NOT NULL,
	status VARCHAR(45) NOT NULL,
	created_at VARCHAR(45) NOT NULL
);
``````


## API

With a computer or container docker with nodejs/npm installed run:


``````
npm install

npm run dev
