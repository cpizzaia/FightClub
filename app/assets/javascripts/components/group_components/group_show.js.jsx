var GroupShow = React.createClass({
  getInitialState: function(){
    return({group: GroupStore.group(), createEvent: false});
  },

  componentDidMount: function(){
    GroupStore.addChangeListener(this._changed);
    GroupStore.fetchGroup(this.props.routeParams.id);
  },

  componentWillUnmount: function(){
    GroupStore.removeChangeListener(this._changed);
    GroupStore.clearGroup();
  },

  _changed: function(){
    this.setState({group: GroupStore.group()});
  },

  _joinGroup: function(e) {
    e.preventDefault();

    var formData = new FormData();

    formData.append('users_group[group_id]', this.state.group.id);

    ApiUtil.joinGroup(formData);
  },

  _leaveGroup: function(e) {
    e.preventDefault();
    ApiUtil.leaveGroup(this.state.group.id);
  },

  _memberOfGroup: function(){
    var currentUser = UserStore.currentUser();
    for (var i = 0; i < this.state.group.members.length; i++){
      if (currentUser.id === this.state.group.members[i].id){
        return <button onClick={this._leaveGroup} className="group-join">Leave</button>;
      }
    }
    return <button onClick={this._joinGroup} className="group-join">Join</button>;
  },

  _ableToAddEvents: function(){
    var currentUser = UserStore.currentUser();

    if (typeof currentUser === "undefined") {
      return;
    }
    else if (this.state.group.organizer.id === currentUser.id) {
      return <a className="group-nav-bar-link-right" onClick={this._createEvent} href={"#/group" + this.state.group.id}>Add Event</a>;
    } else {
      return;
    }
  },

  _createEvent: function(e){
    e.preventDefault();
    this.setState({createEvent: true});
  },

  _stopCreateEvent: function(e){
    if (typeof e !== "undefined"){
      e.preventDefault();
    }
    this.setState({createEvent: false});
  },

  render: function(){
    var html;
    var eventCreate;

    if (this.state.createEvent){
      eventCreate = <EventCreate stopCreateEvent={this._stopCreateEvent} />;
    }

    if (typeof this.state.group !== "undefined"){
      html = (
        <div className="group-show-container group">

          {eventCreate}

          <section className="group-show-header">
            <h1 className="group-show-title">{this.state.group.title}</h1>
            <nav className="group-show-nav group">
              <a className="group-nav-bar-link-left" href={"#/group" + this.state.group.id}>Home</a>
              <a className="group-nav-bar-link-left" href={"#/group" + this.state.group.id}>Members</a>
              {this._ableToAddEvents()}
            </nav>
          </section>

          <section className="group-show-description-container">
            <article className="group-show-description">
              {this.state.group.description}
            </article>
            <section className="group-show-lower-description group">
              <h2 className="group-description-noun">{"We're " + this.state.group.members.length + " " + this.state.group.member_noun}</h2>
              {this._memberOfGroup()}
              <GroupMemberList members={this.state.group.members.slice(0,10)} />
            </section>
          </section>

          <div className="group-show-sidebar group">

            <div className="group-show-image-container">
              <img className="group-show-image center-image" src={this.state.group.group_img_url}/>
            </div>

            <section className="group-show-details">
              <h1 className="group-show-location">{this.state.group.city + ", " + this.state.group.state}</h1>

              <ul>
                <li className="group-show-detail">{"Members: " + this.state.group.members.length}</li>
                <li className="group-show-detail">{"Events: " + this.state.group.events.length}</li>
              </ul>

            </section>

            <div className="group-show-organizer group">
              <h2 className="group-show-organizer-header">Organizer:</h2>
              <h2 className="group-show-oragnizer-name">{this.state.group.organizer.name}</h2>
              <div className="group-show-organizer-image-container">
                <img className="group-show-organizer-image center-image" src={this.state.group.organizer.profile_img_url}/>
              </div>
            </div>

          </div>

          <div className="group-event-index-container">
            <h1 className="group-event-index-header">Events:</h1>
            {this.state.group.events.map(function(event){
              return (<GroupEventIndex key={event.id} event={event}/>);
            })}
          </div>






        </div>
        );
    }
    return (<div>{html}</div>);
  }


});
