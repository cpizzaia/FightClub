var MemberProfile = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return ({
      user: UserStore.user(),
    });
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);
    UserStore.fetchUserById(this.props.params.id);
  },

  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._changed);
    UserStore.clearUser();
  },

  componentWillReceiveProps: function(nextProps){
    UserStore.fetchUserById(nextProps.routeParams.id);
  },

  _changed: function(){
    this.setState({user: UserStore.user()});
  },

  render: function(){
    var html;
    var html2;
    if (typeof this.state.user.id !== "undefined"){
      html = (
          <div className="group">
            <div className="profile-name">
              <h2 className="profile-name-header">
                {this.state.user.name}
              </h2>
            </div>
            <div className="profile-image-container group">
              <img className="profile-image center-image" src={this.state.user.profile_img_url}/>
            </div>
          </div>
      );
      html2 = (
        <div>
          <h2 className="profile-group-amount">{"Organizer of " + this.state.user.groups_led.length + " groups"}</h2>
          <ProfileGroups groups={this.state.user.groups_led} />
          <h2 className="profile-group-amount">{"Member of " + this.state.user.groups.length + " groups"}</h2>
          <ProfileGroups groups={this.state.user.groups} />
        </div>
      );
    }
    return (
      <div className="profile">{html}{html2} </div>
    );
  }
});
