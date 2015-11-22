var HeaderToolbar = React.createClass({

  mixins: [ReactRouter.History],

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

  _clearAndRedirect: function(){
    this.setState({user: UserStore.currentUser()});
    this.history.pushState(null, "/");
  },

  _signOut: function(){
    ApiUtil.signUserOut(this._clearAndRedirect);
  },

  render: function(){
    if (typeof this.state.user.id !== "undefined"){
      return(
        <section className="header-toolbar group">

          <a href="#/" className="logo"> <img src={FightClub.logoUrl}/> </a>
          <a className="groups-button" href="#/"> Groups </a>

            <a className="toolbar-thumbnail-link" href="#/profile" title="profile">
              <img className="toolbar-thumbnail center-image" src={this.state.user.profile_img_url}/>
            </a>


              <button onClick={this._signOut}className="signout-button"> Sign Out </button>


        </section>
      );
    } else {
      return(
        <section className="header-toolbar group">

          <h1 className="logo"> <img src={FightClub.logoUrl}/> </h1>
          <a className="groups-button" href="#/"> Groups </a>

          <a className="signout-button" href="#/users/new">Sign Up</a>
          <a className="signout-button" href="#/session/new">Sign In</a>

        </section>
      );
    }
  }



});
