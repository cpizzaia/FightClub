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

    ApiUtil.signUserUp(formData, this._redirect);
  },

  _redirect: function(){
    this.history.pushState(null, "/profile");
  },

  render: function(){
    return(
      <form className="login-signup-form" onSubmit={this._handleSubmit}>

        <label className="signup-in-label"> Name
          <input className="login-input" type="text" valueLink={this.linkState("name")}/>
        </label>

        <label className="signup-in-label"> Email
          <input className="login-input" type="email" valueLink={this.linkState("email")}/>
        </label>

        <label className="signup-in-label"> Password
          <input className="login-input" type="password" valueLink={this.linkState("password")}/>
        </label>
        <button className="login-form-button"> Sign Up </button>
      </form>
    );
  }
});
