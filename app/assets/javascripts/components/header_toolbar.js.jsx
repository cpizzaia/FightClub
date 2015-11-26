var HeaderToolbar = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function(){
    return({
      user: UserStore.currentUser(),
      createGroup: false,
      signIn: false,
      signUp: false
    });
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

  _signIn: function(e){
    e.preventDefault();
    this.setState({signIn: true});
  },

  _stopSignIn: function(e){
    if (typeof e !== "undefined"){
      e.preventDefault();
    }
    this.setState({signIn: false});
  },

  _signUp: function(e){
    e.preventDefault();
    this.setState({signUp: true});
  },

  _stopSignUp: function(e){
    if (typeof e !== "undefined"){
      e.preventDefault();
    }
    this.setState({signUp: false});
  },

  render: function(){
    var modal;
    if (this.state.createGroup){
      modal = <GroupCreate stopCreateGroup={this._stopCreateGroup} />;
    } else if (this.state.signIn){
      modal = <NewSession stopSignIn={this._stopSignIn} />;
    } else if (this.state.signUp){
      modal = <NewUser stopSignUp={this._stopSignUp} />;
    }
    if (typeof this.state.user.id !== "undefined"){
      return(
        <section className="header-toolbar group">

          {modal}

          <a href="#/" className="logo"> <img src={FightClub.logoUrl}/> </a>

          <a className="header-toolbar-button-left" href="#/">
            <img className="header-toolbar-button-image center-image" src={FightClub.groups}/>
          </a>

          <button onClick={this._createGroup} className="header-toolbar-button-left">
            <img className="header-toolbar-button-image center-image" src={FightClub.create_group}/>
          </button>

            <a className="toolbar-thumbnail-link" href="#/profile" title="profile">
              <img className="toolbar-thumbnail center-image" src={this.state.user.profile_img_url}/>
            </a>


              <button onClick={this._signOut} className="header-toolbar-button-right">
                <img className="header-toolbar-button-image center-image" src={FightClub.sign_out}/>
              </button>


        </section>
      );
    } else {
      return(
        <section className="header-toolbar group">

          {modal}

          <h1 className="logo"> <img src={FightClub.logoUrl}/> </h1>
          <a className="header-toolbar-button-left" href="#/">
            <img className="header-toolbar-button-image center-image" src={FightClub.groups}/>
          </a>

          <button className="header-toolbar-button-right" onClick={this._signUp}>
            <img className="header-toolbar-button-image center-image" src={FightClub.sign_up}/>
          </button>

          <button className="header-toolbar-button-right" onClick={this._signIn}>
            <img className="header-toolbar-button-image center-image" src={FightClub.sign_in}/>
          </button>

        </section>
      );
    }
  }



});
