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
    user_id INT NOT NULL,
    group_id INT NOT NULL,
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
    NotionApiKey VARCHAR(255),
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

CREATE PROCEDURE createGroup(user_id INT,group_name VARCHAR(255))
    LANGUAGE plpgsql AS
    $$
    DECLARE 
        g_id INT; 
        a_id INT; 
    BEGIN
        INSERT INTO Groups (name) VALUES (group_name) RETURNING group_id INTO  g_id ;
        INSERT INTO User_Group (user_id,group_id,privilege) VALUES (user_id,g_id,'admin');
        INSERT INTO apiskey (notionapikey,discordapikey,facebookapikey,slackapikey) VALUES ('','','','') RETURNING apis_id INTO  a_id;
        INSERT INTO apis_groups (apis_id,group_id) VALUES (a_id,g_id);

    END
    $$;

DROP PROCEDURE createGroup(user_id INT,group_name VARCHAR(255));

CALL createGroup(1,'Group1123');






CREATE OR REPLACE FUNCTION  getUserGroups(user_id INT) 
    RETURNS table (name VARCHAR(255), group_id INT, privilege privileges) 
     LANGUAGE plpgsql AS
    $$
    DECLARE 
        g_id INT := user_id; 
    BEGIN
        RETURN query 
            SELECT g.name, g.group_id,ug.privilege
            FROM Groups AS g
            JOIN User_Group AS ug
            ON g.group_id = ug.group_id
            WHERE ug.user_id = g_id;
        
    END
    $$;



SELECT * FROM public.getUserGroups(1);



CREATE PROCEDURE addUser(group_id INT,Inmail VARCHAR(255),privilege privileges)
    LANGUAGE plpgsql AS
    $$
    DECLARE 
        u_id INT; 
    BEGIN
        SELECT user_id INTO u_id FROM Users WHERE mail = Inmail;
        INSERT INTO User_Group (user_id,group_id,privilege) VALUES (u_id,group_id,privilege);
    END
    $$;

DROP PROCEDURE addUser(group_id INT,Inmail VARCHAR(255),privilege privileges);

CALL addUser(16,'zawoj11.sms@gmail.com', 'user');








CREATE PROCEDURE updateGroupApi(a_id INT,Notion VARCHAR(255),Discord VARCHAR(255),Facebook VARCHAR(255),Slack VARCHAR(255))
    LANGUAGE plpgsql AS
    $$
    BEGIN
        UPDATE apiskey SET notionapikey = Notion,discordapikey = Discord,facebookapikey = Facebook,slackapikey = Slack WHERE apis_id = a_id;
    END
    $$;

DROP PROCEDURE updateGroupApi((a_id INT,Notion VARCHAR(255),Discord VARCHAR(255),Facebook VARCHAR(255),Slack VARCHAR(255));

CALL updateGroupApi(1,' ',' ',' ','daklsdhkla2');





CREATE OR REPLACE FUNCTION getGroupApi(group_id INT)
    RETURNS table (apis_id INT) 
     LANGUAGE plpgsql AS
    $$
    DECLARE 
        g_id INT := group_id; 
    BEGIN
        RETURN query 
            SELECT apis_id FROM apis_groups WHERE group_id = g_id ;
        
    END
    $$;









CREATE PROCEDURE addTask(taskContnt VARCHAR(255), g_id INT, u_id INT)
    LANGUAGE plpgsql AS
    $$
    DECLARE 
        t_id INT; 
    BEGIN
        INSERT INTO tasks (content,complete) VALUES (taskContnt,0) RETURNING task_id INTO  t_id;
        INSERT INTO tasks_group_user (task_id,group_id,user_id) VALUES (t_id,g_id,u_id);
    END
    $$;

DROP PROCEDURE addUser(group_id INT,Inmail VARCHAR(255),privilege privileges);

CALL addTask('Umyj uszy',26, 2);


CREATE OR REPLACE FUNCTION getTasks(group_id INT)
    RETURNS table (content VARCHAR(255), complete INT, user_id INT) 
     LANGUAGE plpgsql AS
    $$
    DECLARE 
        g_id INT := group_id; 
    BEGIN
        RETURN query 
            SELECT t.content, t.complete,tgu.user_id FROM tasks_group_user AS tgu JOIN tasks as t ON t.task_id = tgu.task_id WHERE group_id = g_id ;
        
    END
    $$;


SELECT * FROM public.getTasks(26);