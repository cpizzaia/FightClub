var NewSession = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return({email: "chunli@capcom.com", password: "123456", pendingSubmit: false});
  },

  _handleSubmit: function(e){
    e.preventDefault();
    if (this.state.pendingSubmit !== true) {
      var email = this.state.email;
      var password = this.state.password;

      var formData = new FormData();

      formData.append("user[email]", email);
      formData.append("user[password]", password);

      $('body').addClass("wait");
      this.setState({pendingSubmit: true});
      UserApiUtil.signUserIn(formData).then(this._onSuccess, this._removeWait);
    }
  },

  _onSuccess: function() {
    this.props.stopSignIn();
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
          <div className="modal-exit" onClick={this.props.stopSignIn}>X</div>


          <h1 className="modal-form-header"> Sign In </h1>

          <label className="modal-label"> Email
            <input className="modal-input" type="email" valueLink={this.linkState("email")}/>
          </label>

          <label className="modal-label"> Password
            <input className="modal-input" type="password" valueLink={this.linkState("password")}/>
          </label>

          <button className="modal-submit-button"> Sign In </button>

        </form>
      </div>
    );
  }
});
