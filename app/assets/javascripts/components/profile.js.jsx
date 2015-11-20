var Profile = React.createClass({

  getInitialState: function(){
    return ({
      user: UserStore.currentUser(),
      profileImgUrl: "",
      profileImgFile: null
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
    this.setState({
      user: UserStore.currentUser(),
      profileImgUrl: UserStore.currentUser().profile_img_url
    });
  },

  _changeFile: function(e){
    var reader = new FileReader();
    var file = e.currentTarget.files[0];


    reader.onloadend = function() {

      this.setState({ profileImgUrl: reader.result, profileImgFile: file });
    }.bind(this);


    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ profileImgUrl: "", profileImgFile: null });
    }
  },

  _handleSubmit: function(e){
    e.preventDefault();

    var file = this.state.profileImgFile;

    var formData = new FormData();
    formData.append("user[profile_img]", file);

    ApiUtil.updateUser(this.state.user.id, formData);
  },

  render: function(){
    var html;
    var html2;
    if (typeof this.state.user !== "undefined"){
      html = (
          <div className="group">
            <h2 className="profile-name">{this.state.user.name}</h2>
            <div className="profile-image-container group">
              <img className="profile-image" src={this.state.profileImgUrl}/>
            </div>
          </div>
      );
      html2 = (
        <div>
          <form className="profile-form">
            <input className="profile-form-upload" onChange={this._changeFile} type="file"/>
            <button className="profile-update-button" onClick={this._handleSubmit}>Update Profile</button>
          </form>
          <h2 className="profile-group-amount">{"Member of " + this.state.user.groups.length + " groups"}</h2>
          <UserGroups groups={this.state.user.groups} />
        </div>);
    }
    return (
      <div className="profile">{html}{html2} </div>
    );
  }
});
