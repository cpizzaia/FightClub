var GroupShow = React.createClass({
  getInitialState: function(){
    return({group: GroupStore.group()});
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

    formData.append('users_groups[group_id]', this.state.group.id);

    ApiUtil.joinGroup(formData);
  },

  render: function(){
    var html;
    if (typeof this.state.group !== "undefined"){
      html = (
        <div className="group-show-container group">

          <section className="group-show-header">
            <h1 className="group-show-title">{this.state.group.title}</h1>
            <nav className="group-show-nav group">
              <a className="group-nav-bar-link-left" href={"#/group" + this.state.group.id}>Home</a>
              <a className="group-nav-bar-link-left" href={"#/group" + this.state.group.id}>Members</a>
              <a className="group-nav-bar-link-right" href={"#/group" + this.state.group.id}>Add Event</a>
            </nav>
          </section>

          <section className="group-show-description-container">
            <article className="group-show-description">
              {this.state.group.description}
            </article>
            <section className="group-show-lower-description group">
              <h2 className="group-description-noun">{"We're " + this.state.group.members.length + " " + this.state.group.member_noun}</h2>
              <button onClick={this._joinGroup} className="group-join">Join</button>
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


// <div className="group-event-index-container">
//   <h1 className="group-event-index-header">Events:</h1>
//   {this.state.group.events.map(function(event){
//     return (<GroupEventIndex key={event.id} event={event}/>);
//   })}
// </div>

//
// <div className="group-show-image-container">
//   <img className="group-show-image center-image" src={this.state.group.image}/>
// </div>
//
// <div className="group-show-details">
//   <p className="group-show-member-count">{"Members: " + this.state.group.members.length}</p>
// </div>
//
// <div className="group-show-organizer">
//   <h2 className="group-show-organizer-header">Organizer:</h2>
//   <div className="group-show-organizer-image-container">
//     <img className="group-show-organizer-image center-image" src={this.state.group.organizer.profile_img_url}/>
//   </div>
// </div>
