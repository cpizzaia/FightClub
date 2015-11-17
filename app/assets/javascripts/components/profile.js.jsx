var Profile = React.createClass({

  getInitialState: function(){
    return ({user: UserStore.currentUser()});
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);
    UserStore.fetchCurrentUser();
  },


  _changed: function(){
    this.setState({user: UserStore.currentUser()});
  },

  render: function(){
    var html;
    if (typeof this.state.user !== "undefined"){
      html = this.state.user.name;
    }
    return (
      <h1>{html}</h1>
    );
  }

});
