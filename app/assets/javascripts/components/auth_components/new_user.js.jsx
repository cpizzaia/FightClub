var NewUser = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return({name: "", email: "", password: "", pendingSubmit: false});
  },

  _handleSubmit: function(e){
    e.preventDefault();
    if (this.state.pendingSubmit !== true) {
      
      var
      email = this.state.email,
      password = this.state.password,
      name = this.state.name;

      var formData = new FormData();

      formData.append("user[email]", email);
      formData.append("user[password]", password);
      formData.append("user[name]", name);

      $('body').addClass("wait");
      this.setState({pendingSubmit: true});
      UserApiUtil.signUserUp(formData).then(this._redirect, this._removeWait);
    }
  },

  _redirect: function(){
    this.props.stopSignUp();
    this.history.pushState(null, "/profile");
    this._removeWait();
  },

  _removeWait: function() {
    $('body').removeClass("wait");
    this.setState({pendingSubmit: false});
  },

  render: function(){
    return(
      <div className="modal-background">
        <form className="modal-form group" onSubmit={this._handleSubmit}>

          <img className="form-background center-image" src={FightClub.modal_background} />

          <div className="modal-exit" onClick={this.props.stopSignUp}>X</div>

          <h1 className="modal-form-header"> Sign Up </h1>

          <label className="modal-label"> Name
            <input className="modal-input" type="text" valueLink={this.linkState("name")}/>
          </label>

          <label className="modal-label"> Email
            <input className="modal-input" type="email" valueLink={this.linkState("email")}/>
          </label>

          <label className="modal-label"> Password
            <input className="modal-input" type="password" valueLink={this.linkState("password")}/>
          </label>
          <button className="modal-submit-button"> Sign Up </button>
        </form>
      </div>
    );
  }
});
