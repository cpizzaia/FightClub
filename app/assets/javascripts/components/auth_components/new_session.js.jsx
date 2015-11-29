var NewSession = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return({email: "chunli@capcom.com", password: "123456"});
  },

  _handleSubmit: function(e){
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    var formData = new FormData();

    formData.append("user[useremail]", email);
    formData.append("user[password]", password);

    UserApiUtil.signUserIn(formData, this.props.stopSignIn);
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
