var GroupShow = React.createClass({
  getInitialState: function(){
    return({
      group: GroupStore.group(),
      createEvent: false,
      currentUser: UserStore.currentUser(),
      tabTitle: "Upcoming",
      error: "",
    });
  },

  componentDidMount: function(){
    GroupStore.addChangeListener(this._changed);
    UserStore.addChangeListener(this._changed);
    GroupStore.fetchGroup(this.props.routeParams.id);
  },

  componentWillUnmount: function(){
    GroupStore.removeChangeListener(this._changed);
    GroupStore.clearGroup();
  },

  _changed: function(){
    this.setState({
      group: GroupStore.group(),
      currentUser: UserStore.currentUser()
     });
  },

  _joinGroup: function(e) {
    e.preventDefault();

    var formData = new FormData();

    formData.append('users_group[group_id]', this.state.group.id);

    ApiUtil.joinGroup(formData);
  },

  _leaveGroup: function(e) {
    if (this.state.group.organizer_id !== this.state.currentUser.id) {
      e.preventDefault();
      ApiUtil.leaveGroup(this.state.group.id);
    } else {
      this.setState({error: "Owner cannot leave group"});

      window.setTimeout(function(){
        this.setState({error: ""});
      }.bind(this), 2000);
    }
  },

  _memberOfGroup: function(){
    for (var i = 0; i < this.state.group.members.length; i++){
      if (this.state.currentUser.id === this.state.group.members[i].id){
        return <button onClick={this._leaveGroup} className="group-join">Leave</button>;
      }
    }
    return <button onClick={this._joinGroup} className="group-join">Join</button>;
  },

  _ableToAddEvents: function(){

    if (typeof this.state.currentUser === "undefined") {
      return;
    }
    else if (this.state.group.organizer.id === this.state.currentUser.id) {
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

  _eventFilter: function(){
    if (this.state.tabTitle === "Upcoming"){
      return (
        this.state.group.upcoming_events.map(function(event){
          return (<GroupEventIndex key={event.id} currentUser={this.state.currentUser} upcoming={true} event={event}/>);
        }.bind(this))
      );
    } else if (this.state.tabTitle === "Past"){
      return (
        this.state.group.past_events.map(function(event){
          return (<GroupEventIndex key={event.id} currentUser={this.state.currentUser} upcoming={false} event={event}/>);
        }.bind(this))
      );
    }
  },

  _eventType: function(e) {
    this.setState({tabTitle: e.currentTarget.innerHTML});
  },

  _tabs: function() {
     return ["Upcoming", "Past"].map(function(tab){
      if (this.state.tabTitle === tab){
        return <h3 className="group-event-tab tab-selected" onClick={this._eventType}>{tab}</h3>;
      } else {
        return <h3 className="group-event-tab" onClick={this._eventType}>{tab}</h3>;
      }
    }.bind(this));
  },

  render: function(){
    var html, html2;
    var eventCreate;


    if (typeof this.state.group.id !== "undefined"){
      if (this.state.createEvent){
        eventCreate = <EventCreate groupId={this.state.group.id} stopCreateEvent={this._stopCreateEvent} />;
      }
      if (this.state.error !== "") {
        html2 = <h2 className="group-status-banner"> {this.state.error} </h2>;
      }
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
                <li className="group-show-detail">{"Events: " + this.state.group.upcoming_events.length}</li>
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

            <nav className="group-event-tab-container group">
              {this._tabs()}
            </nav>

            {this._eventFilter()}

          </div>


        </div>
        );
    }
    return (<div>{html2}{html}</div>);
  }


});
