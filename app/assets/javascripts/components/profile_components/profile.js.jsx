var Profile = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return ({
      user: UserStore.currentUser(),
      profileImgUrl: "",
      profileImgFile: null,
      profileNameEdit: false,
      profileName: "",
      updated: false,
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
      profileImgUrl: UserStore.currentUser().big_profile_img_url,
      profileName: UserStore.currentUser().name
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
    var name = this.state.profileName;
    var file = this.state.profileImgFile;

    var formData = new FormData();
    if (file !== null){
      formData.append("user[profile_img]", file);
    }
    formData.append("user[name]", name);

    UserApiUtil.updateUser(this.state.user.id, formData).then(this._updated);
  },

  _editName: function(){
    if (this.state.profileNameEdit){
      this.setState({profileNameEdit: false});
    } else {
    this.setState({profileNameEdit: true});
    }
  },


  _textOrHeader: function(){
    if (this.state.profileNameEdit){
      return(
        <input autoFocus onBlur={this._editName}
          type="text" className="profile-name-input"
          valueLink={this.linkState("profileName")}/>
      );
    } else {
      return (
        <h2 className="profile-name-header">
          {this.state.profileName}
        </h2>);
    }
  },

  _updated: function(){
    this.setState({updated: true});

    window.setTimeout(function(){
      this.setState({updated: false});
    }.bind(this), 2000);
  },

  render: function(){
    var html;
    var html2;
    var html3;
    if (typeof this.state.user.id !== "undefined"){
      html = (
          <div className="group">
            <div className="profile-name">
              {this._textOrHeader()}
              <button onClick={this._editName} className="profile-name-edit-button"></button>
            </div>
            <div className="profile-image-container group">
              <img className="profile-image center-image" src={this.state.profileImgUrl}/>
            </div>
          </div>
      );
      html2 = (
        <div>
          <div className="profile-button-container group">
            <label className="profile-form-upload">Choose Picture
              <input onChange={this._changeFile} type="file"/>
            </label>

            <button className="profile-update-button" onClick={this._handleSubmit}>Update Profile</button>
          </div>

          <h2 className="profile-group-amount">{"Organizer of " + this.state.user.groups_led.length + " groups"}</h2>
          <ProfileGroups groups={this.state.user.groups_led} />

          <h2 className="profile-group-amount">{"Member of " + this.state.user.groups.length + " groups"}</h2>

          <ProfileGroups groups={this.state.user.groups} />
        </div>
      );
      if(this.state.updated) {
        html3 = (
          <h2 className="profile-status-banner"> Profile Updated </h2>
        );
      }
    }
    return (
      <div className="profile">{html3}{html}{html2} </div>
    );
  }
});
