var Profile = React.createClass({

  getInitialState: function(){
    return ({user: UserStore.currentUser()});
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);
    UserStore.fetchCurrentUser();
  },

  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({user: UserStore.currentUser()});
  },

  render: function(){
    var html;
    var html2;
    if (typeof this.state.user !== "undefined"){
      html = (
          <div className="group">
            <h2 className="profile-name">{this.state.user.name}</h2>
            <img className="profile-image" src={this.state.user.profile_img_url}/>
          </div>
      );
      html2 = (
        <div>
          <h2 className="profile-group-amount">Member of {this.state.user.groups.length} groups</h2>
          <UserGroups groups={this.state.user.groups} />
        </div>);
    }
    return (
      <div className="profile">{html}{html2} </div>
    );
  }
});
