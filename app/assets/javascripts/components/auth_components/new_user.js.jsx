var NewUser = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return({name: "", email: "", password: ""});
  },

  _handleSubmit: function(e){
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    var name = this.state.name;

    var formData = new FormData();

    formData.append("user[useremail]", email);
    formData.append("user[password]", password);
    formData.append("user[name]", name);

    UserApiUtil.signUserUp(formData).then(this._redirect);
  },

  _redirect: function(){
    this.props.stopSignUp();
    this.history.pushState(null, "/profile");
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
