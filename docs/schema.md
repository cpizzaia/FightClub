# Schema Information

## Events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
organizer_id| integer   | not null, foreign key (references users), indexed
group_id    | integer   | not null, foreign key (references group), indexed

## UsersEvents (join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id    | integer   | not null, foreign key (references events), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## Groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
organizer_id| integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    | not null

## UsersGroups (join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## Tags (groups and users have tags (called interests on the user side))
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
tagable     | references| polymorphic, indexed

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
