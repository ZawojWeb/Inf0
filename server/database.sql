CREATE DATABASE perntodo;

CREATE TABLE Users(
    user_id SERIAL PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar_id INT NOT NULL
);

CREATE TABLE Groups(
   group_id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL
);
CREATE TYPE privileges AS ENUM ('admin', 'editor', 'user');
CREATE TABLE User_Group(
    user_id INT REFERENCES Users (user_id),
    group_id INT REFERENCES Groups (group_id),
    privilege privileges
);

CREATE TABLE Messages(
    message_id SERIAL PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    sendDate DATE NOT NULL
);

CREATE TABLE Messages_Group(
    message_id INT REFERENCES Messages (message_id),
    group_id INT REFERENCES Groups (group_id)
);


CREATE TABLE APIsKey(
    apis_id SERIAL PRIMARY KEY,
    NotionApiKey VARCHAR(2555),
    DiscordApiKey VARCHAR(255),
    FacebookApiKey VARCHAR(255),
    SlackApiKey VARCHAR(255)
);

CREATE TABLE apis_groups(
    apis_id INT REFERENCES APIsKey (apis_id),
    group_id INT REFERENCES Groups (group_id)
);


CREATE TABLE Tasks (
    task_id SERIAL PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    complete INT DEFAULT 0
);


CREATE TABLE Tasks_Group_User(
    task_id INT REFERENCES Tasks (task_id),
    group_id INT REFERENCES Groups (group_id),
    user_id INT REFERENCES Users (user_id)
);