var GroupEventIndex = React.createClass({

  _signedUp: function(){
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
  },

  _joinEvent: function(e){
    e.preventDefault();
    ApiUtil.joinEvent(this.props.event.id);
  },

  _leaveEvent :function(e){
    e.preventDefault();
    ApiUtil.leaveEvent(this.props.event.id);
  },

  render: function(){
    return(
      <div className="group-event-index-item-container group">

        <section className="group-event-index-details" >

          <h3 className="group-event-index-start-date">{this.props.event.start_date}</h3>
          <h3 className="group-event-index-start-hour">{this.props.event.start_hour}</h3>
          {this._signedUp()}
          <h4 className="group-event-index-members">{this.props.event.users.length + " going"}</h4>

        </section>

        <section className="group-event-index-content" >
          <h2 className="group-event-index-title">{this.props.event.title}</h2>
          <h3 className="group-event-index-address">{this.props.event.address}</h3>
          <GroupEventUserList users={this.props.event.users.slice(0,10)}/>
          <article className="group-event-index-description">{this.props.event.description}</article>

        </section>
      </div>
    );
  }
});
