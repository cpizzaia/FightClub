var HeaderToolbar = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function(){
    return({user: UserStore.currentUser(), createGroup: false});
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

  _createGroup: function(e){
    e.preventDefault();
    this.setState({createGroup: true});
  },

  _stopCreateGroup: function(e){
    if (typeof e !== "undefined"){
      e.preventDefault();
    }
    this.setState({createGroup: false});
  },

  render: function(){
    var groupCreate;
    if (this.state.createGroup){
      groupCreate = <GroupCreate stopCreateGroup={this._stopCreateGroup} />;
    }
    if (typeof this.state.user.id !== "undefined"){
      return(
        <section className="header-toolbar group">

          {groupCreate}

          <a href="#/" className="logo"> <img src={FightClub.logoUrl}/> </a>
          <a className="header-toolbar-button-left" href="#/"> Groups </a>

          <button onClick={this._createGroup} className="header-toolbar-button-left"> Create Group </button>

            <a className="toolbar-thumbnail-link" href="#/profile" title="profile">
              <img className="toolbar-thumbnail center-image" src={this.state.user.profile_img_url}/>
            </a>


              <button onClick={this._signOut} className="header-toolbar-button-right"> Sign Out </button>


        </section>
      );
    } else {
      return(
        <section className="header-toolbar group">

          <h1 className="logo"> <img src={FightClub.logoUrl}/> </h1>
          <a className="header-toolbar-button-left" href="#/"> Groups </a>

          <a className="header-toolbar-button-right" href="#/users/new">Sign Up</a>
          <a className="header-toolbar-button-right" href="#/session/new">Sign In</a>

        </section>
      );
    }
  }



});
