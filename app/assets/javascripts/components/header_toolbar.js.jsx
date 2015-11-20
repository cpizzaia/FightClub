var HeaderToolbar = React.createClass({

  getInitialState: function(){
    return({user: UserStore.currentUser()});
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

  _signOut: function(){
    ApiUtil.signUserOut(this._changed);
  },

  render: function(){
    if (typeof this.state.user.id !== "undefined"){
      return(
        <section className="header-toolbar group">

          <h1 className="logo"> <img src={this.state.user.logo_url}/> </h1>
          <a className="groups-button" href="#/"> Groups </a>

            <a className="toolbar-thumbnail-link" href="#/profile" title="profile">
              <img className="toolbar-thumbnail" src={this.state.user.profile_img_url}/>
            </a>


              <button onClick={this._signOut}className="signout-button"> Sign Out </button>


        </section>
      );
    } else {
      return(
        <section className="header-toolbar group">

          <h1 className="logo"> <img src={this.state.user.logo_url}/> </h1>
          <a className="groups-button" href="#/"> Groups </a>

          <a className="signout-button" href="users/new">Sign Up</a>
          <a className="signout-button" href="session/new">Sign In</a>

        </section>
      );
    }
  }



});
