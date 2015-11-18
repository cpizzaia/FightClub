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
    if (typeof this.state.user !== "undefined"){
      html = <div><h2 className="profile-name">{this.state.user.name}</h2><img className="profile-image" src={this.state.user.profile_img_url}/></div>;
    }
    return (
      <div className="profile group">{html}</div>
    );
  }
});
