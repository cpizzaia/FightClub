var NewSession = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return({email: "ryu@capcom.com", password: "123456"});
  },

  _handleSubmit: function(e){
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    var formData = new FormData();

    formData.append("user[useremail]", email);
    formData.append("user[password]", password);

    ApiUtil.signUserIn(formData, this._redirect);
  },

  _redirect: function(){
    this.history.pushState(null, "/");
  },

  render: function(){
    return(
      <form className="login-signup-form" onSubmit={this._handleSubmit}>
        <label className="signup-in-label"> Email
          <input className="login-input" valueLink={this.linkState("email")}/>
        </label>

        <label className="signup-in-label"> Password
          <input className="login-input" valueLink={this.linkState("password")}/>
        </label>
        <button className="login-form-button"> Sign In </button>
      </form>
    );
  }
});
