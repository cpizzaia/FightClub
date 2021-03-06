var GroupEventIndex = React.createClass({

  _signedUp: function(){
    if (this.props.upcoming){
      for (var i = 0; i < this.props.event.users.length; i++){
        if (this.props.event.users[i].id === this.props.currentUser.id){
          return (
            <div className="join-event-container" onClick={this._leaveEvent}>
              <img className="join-event center-image" src={FightClub.koUrl}/>
            </div>
          );
        }
      }
      return (
        <div className="join-event-container" onClick={this._joinEvent}>
          <img className="join-event center-image" src={FightClub.fightUrl}/>
        </div>
      );
    } else {
        return (
          <div className="join-event-container-empty"></div>
        );
    }
  },

  _joinEvent: function(e){
    if (typeof this.props.currentUser.id !== "undefined"){
      if (this.props.currentUserInGroup()) {
        e.preventDefault();
        EventApiUtil.joinEvent(this.props.event.id);
      } else {
        this.props.displayError("Join the group to join events");
      }
    } else {
      this.props.displayError("Sign in join events");
    }
  },

  _leaveEvent :function(e){
    e.preventDefault();
    EventApiUtil.leaveEvent(this.props.event.id);
  },

  _eventPassed: function(){
    if (this.props.upcoming){
      return this.props.event.users.length + " going";
    } else {
      return this.props.event.users.length + " went";
    }
  },

  render: function(){
    return(
      <div className="group-event-index-item-container group">

        <section className="group-event-index-details" >

          <h3 className="group-event-index-start-date">{this.props.event.start_date}</h3>
          <h3 className="group-event-index-start-hour">{this.props.event.start_hour}</h3>
          {this._signedUp()}
          <h4 className="group-event-index-members">{this._eventPassed()}</h4>

        </section>


        <section className="group-event-index-content" >

          <a href={"#/groups/" + this.props.groupId + "/events/" + this.props.event.id} className="group-event-index-title">{this.props.event.title}</a>
          <h3 className="group-event-index-address">{this.props.event.address}</h3>
          <GroupEventUserList users={this.props.event.users.slice(0,20)}/>
          <article className="group-event-index-description">{this.props.event.description}</article>

        </section>

      </div>
    );
  }
});
