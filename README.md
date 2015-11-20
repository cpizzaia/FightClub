# FightClub

[Heroku link][heroku]

[heroku]: http://fight-club-app.herokuapp.com

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


### Phase 1: User Authentication, User Model, User API, User Controller, User React Components (.5 days)
In Phase 1, I will implement the user model and all of its supporting features
such as the API, controller, and React components used to create and display a
profile.

[Details][phase-one]

### Phase 2: Group model, Group controller, Group API, and Group React Components (1.5 day)
Phase 2 will implement the group modal and all the of features that support it
such as being able to create a group and have users join it while also being
able to display all this information through React.

[Details][phase-two]

### Phase 3: Event model, Event controller, Event API, and Event React Components (1.5 day)
Same as Phase 2 but will implement everything supporting the Event model.

[Details][phase-three]

### Phase 4: Tag model, Tag controller, Tag API, and Tag React Components (1 day)
Same as Phase 2 but will implement everything supporting the Tags model. As an
extra users will be able see recommendations for groups based on the tags they
have on themselves.

[Details][phase-four]

### Phase 5: Create modals to allow users to create groups and events (.5 days)
Phase 7 will create a better experience for users as it will allow them to
create events and groups without having to navigate to a new page.


### Phase 6: Style site and create searches and filters (1.5 days)
Phase 8 will bring the site together by making everything look production ready
through design and will also allow users to search for groups through filters
and search boxes.


### Phase 7: Create Transitions for all effects (.5 days)
Phase 9 will complete the site by adding transitions to all the user
interactions and will create an amazing user experience.


### Bonus Features (TBD)
- [ ] Messages
- [ ] Comments
- [ ] Group reviews
- [ ] Reminders for events you are attending.
- [ ] Adding interests to events and recommendations for users.
- [ ] Facebook authentication.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
