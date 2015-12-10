# FightClub

[Live](http://fightclub.site)

## Summary

Fightclub is a clone of [Meetup](http://meetup.com), A site where you can find
groups by similiar interest and signup for their events. FightClub replicates
the basic functionality of Meetup. The main difference is that FightClub was
entirely built as a simple application in ReactJS.

## What can I do on this website?

You can:
- Securely create an account
- Edit your own profile and see the groups you organize or are a member of.
- Join groups or start your own
- Join events or start your own
- View other members and see what groups they are part of.
- Search for groups by title or description
- Comment on events and chat with other members

### Languages:
- Javascript
- Ruby
- HTML / CSS

### Frameworks:
- React
- Rails

### Libraries and Technologies:
- jQuery / AJAX
- jQuery-UI
- paperclip / AWS
- pg_search
- kaminari
- figaro
- jbuilder


## API

FightClub is powered by a RESTful JSON API.

I ensured that  React routes and API endpoints were the same. If you're on a
page that displays data (besides the root), you can replace the `#` in
the URI fragment at any time with `api` to see what's being served up for a
given view.

I used model scoping in rails to split the events up and display the results by
upcoming or past and also took extra care to make sure all queries that would be
N+1 were crafted in SQL not to be.

## Future polishing touches (TBD)
- Tags on groups and users, to enable reccomendations.
- Private messaging between users.
- Group reviews.
- Reminders for events you are attending.
