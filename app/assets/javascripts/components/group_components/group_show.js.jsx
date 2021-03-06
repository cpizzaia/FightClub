var GroupShow = React.createClass({

  getInitialState: function(){
    return({
      group: GroupStore.group(),
      createEvent: false,
      currentUser: UserStore.currentUser(),
      tabTitle: "Upcoming",
      error: "",
      showMembers: false,
      showEvent: false,
      event: EventStore.event()
    });
  },

  componentDidMount: function(){
    GroupStore.addChangeListener(this._changed);
    UserStore.addChangeListener(this._changed);
    GroupStore.fetchGroup(this.props.routeParams.id);
    if (this.props.location.pathname.indexOf("members") !== -1) {
      this.setState({showMembers: true});
    } else if (typeof this.props.params.event_id !== "undefined") {
      EventStore.addChangeListener(this._changed);
      EventStore.fetchEvent(this.props.params.event_id);
      this.setState({showEvent: true});
    }
  },

  componentWillUnmount: function(){
    GroupStore.removeChangeListener(this._changed);
    GroupStore.clearGroup();
  },

  componentWillReceiveProps: function(nextProps){
    GroupStore.fetchGroup(nextProps.routeParams.id);
    if (nextProps.location.pathname.indexOf("members") !== -1) {
      this.setState({showMembers: true, showEvent: false});
    } else if (typeof nextProps.params.event_id !== "undefined") {
      EventStore.addChangeListener(this._changed);
      EventStore.fetchEvent(nextProps.params.event_id);
      this.setState({showMembers: false, showEvent: true});
    } else {
      this.setState({showMembers: false, showEvent: false});
    }
  },

  _changed: function(){
    this.setState({
      group: GroupStore.group(),
      currentUser: UserStore.currentUser(),
      event: EventStore.event()
     });
  },

  _joinGroup: function(e) {
    if (typeof this.state.currentUser.id !== "undefined") {
      e.preventDefault();

      var formData = new FormData();

      formData.append('users_group[group_id]', this.state.group.id);

      GroupApiUtil.joinGroup(formData);
    } else {
      this._displayError("Sign in to join groups");
    }
  },

  _leaveGroup: function(e) {
    if (this.state.group.organizer_id !== this.state.currentUser.id) {
      e.preventDefault();
      GroupApiUtil.leaveGroup(this.state.group.id);
    } else {
      this._displayError("User cannot leave own group");
    }
  },

  _displayError: function(message){
    this.setState({error: message});
    this._errorReset();
  },

  _errorReset: function() {
    window.setTimeout(function(){
      this.setState({error: ""});
    }.bind(this), 2000);
  },

  _memberOfGroup: function(){
      if (this._currentUserInGroup()){
        return <button onClick={this._leaveGroup} className="group-join">Leave</button>;
      } else {
        return <button onClick={this._joinGroup} className="group-join">Join</button>;
      }
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
          return (
            <GroupEventIndex
              key={event.id}
              groupId={this.state.group.id}
              displayError={this._displayError}
              currentUser={this.state.currentUser}
              currentUserInGroup={this._currentUserInGroup}
              upcoming={true} event={event}/>);
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

  _switchTab: function(e) {
    this.setState({tabTitle: e.currentTarget.dataset.tab});
  },

  _tabs: function() {
     return ["Upcoming", "Past"].map(function(tab, idx){
      if (this.state.tabTitle === tab){
        return <h3 key={tab} data-tab={tab} className="group-event-tab tab-selected" onClick={this._switchTab}>{tab + " (" + this._tabLength(tab) + ")"}</h3>;
      } else {
        return <h3 key={tab} data-tab={tab} className="group-event-tab" onClick={this._switchTab}>{tab + " (" + this._tabLength(tab) + ")"}</h3>;
      }
    }.bind(this));
  },

  _tabLength: function(tab){
    switch (tab) {
      case "Upcoming":
        return this.state.group.upcoming_events.length;
      case "Past":
        return this.state.group.past_events.length;
    }
  },

  _currentUserInGroup: function(){
    for (var i = 0; i < this.state.group.members.length; i++){
      if (this.state.currentUser.id === this.state.group.members[i].id){
        return true;
      }
    }
    return false;
  },

  _showDescription: function(){
    if (!this.state.showMembers && !this.state.showEvent) {
      return (
        <GroupShowDescription group={this.state.group} memberOfGroup={this._memberOfGroup}/>
      );
    }
  },

  _showEvent: function(){
    if(!this.state.showMembers && this.state.showEvent){
      return (
        <EventShow event={this.state.event}/>
      );
    }
  },

  _showEvents: function(){
    if (!this.state.showMembers && !this.state.showEvent) {
      return (
        <GroupShowEvents tabs={this._tabs}  eventFilter={this._eventFilter}/>
      );
    }
  },

  _showMembers: function(){
    if (this.state.showMembers && !this.state.showEvent){
      return (
        <GroupMembers members={this.state.group.members}/>
      );
    }
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
              <a href={"#/groups/" + this.state.group.id} className="group-nav-bar-link-left" >Home</a>
              <a href={"#/groups/" + this.state.group.id + "/members"} className="group-nav-bar-link-left">Members</a>
              {this._ableToAddEvents()}
            </nav>

          </section>

          {this._showDescription()}
          {this._showEvent()}
          {this._showMembers()}


          <div className="group-show-sidebar group">

            <div className="group-show-image-container">
              <img className="group-show-image center-image" src={this.state.group.group_img_url}/>
            </div>

            <section className="group-show-details">
              <h1 className="group-show-location">{this.state.group.city + ", " + this.state.group.state}</h1>
              <h4 className="group-show-founded">{"Founded " + this.state.group.founded}</h4>

              <ul>
                <li className="group-show-detail">{"Members: " + this.state.group.members.length}</li>
                <li className="group-show-detail">{"Events: " + this.state.group.upcoming_events.length}</li>
              </ul>

            </section>


            <div className="group-show-organizer group">

              <h2 className="group-show-organizer-header">Organizer:</h2>
              <h2 className="group-show-oragnizer-name">{this.state.group.organizer.name}</h2>
              <a href={"#/users/" + this.state.group.organizer_id} className="group-show-organizer-image-container">
                <img className="group-show-organizer-image center-image" src={this.state.group.organizer.profile_img_url}/>
              </a>

            </div>


          </div>


          {this._showEvents()}



        </div>
        );
    }
    return (<div>{html2}{html}</div>);
  }


});
