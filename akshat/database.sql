-- CREATE DATABASE todo_database



CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    deadline DATE DEFAULT '2022-01-31',
    _group VARCHAR(20) DEFAULT 'default',
    completed BOOLEAN DEFAULT 'FALSE'
);