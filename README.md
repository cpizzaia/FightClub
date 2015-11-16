# FightClub

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product
(note: name was chosen after proposal was finished events are now called fights.)

FightClub is a web application inspired by Meetup built using Ruby on Rails
and React.js. FightClub allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, join, edit, and delete Groups.
- [ ] Within Groups create, join, edit, and delete Events.
- [ ] Search for Groups within a certain area.
- [ ] See suggest Groups based on interests.
- [ ] Sort Groups based on amount of members, date created, and nearness.
- [ ] Tag Groups with multiple tags and search Groups by tag
- [ ] Apply styling to Groups when creating or editing them.
- [ ] Message other members in Groups.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, all Models, and JSON API (1 day)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for all the models.

[Details][phase-one]

### Phase 2: Model associations and CRUD for all Models (1 day)

Phase 2 is setting up all the associations for the models and then making the necessary controllers to develop actions that allows the creation, deletion, ability to update, and ability to read the models.

[Details][phase-two]

### Phase 3: Flux Architecture, Reacting Routing, and Components (3 days)

In Phase 3, I will setup the flux architecture and the react routing to begin working on the views and components required to create and view groups, events, comments, messages and most importantly signup for events.

[Details][phase-three]

### Phase 4: Match users to groups through tags. (1 day)

Phase 4 will allow the site to provide a recommendations view filled with groups for the user after they have specified interests on their profile that will match those interests with the tags of the group.

[Details][phase-four]

### Phase 5: Style site and create modals to allow users to create accounts, groups, and events. (2 days)

Phase 5 will be used to style the site to look like a clone and make it more usable and readable, while also adding modals for easy creation of users, groups, and events.

### Phase 6: Transitions (2 days)

Phase 6 will be used to create transitions for the site for when groups and events are fetched and interfaces are alternated between (i.e. going from comments to events to groups).


### Bonus Features (TBD)
- [ ] Reminders for events you are attending.
- [ ] Adding interests to events and recommendations for users.
- [ ] Facebook authentication.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
