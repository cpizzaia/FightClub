var GroupCreate = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return({
      title: "",
      description: "",
      memberNoun: "",
      zipcode: "",
      groupImgFile: null,
      groupImgUrl: "",
      pendingSubmit: false
    });
  },

  _changeFile: function(e){
    var reader = new FileReader();
    var file = e.currentTarget.files[0];


    reader.onloadend = function() {

      this.setState({ groupImgUrl: reader.result, groupImgFile: file });
    }.bind(this);


    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ groupImgUrl: "", groupImgFile: null });
    }
  },

  _handleSubmit: function(e){
    e.preventDefault();
    if (this.state.pendingSubmit !== true) {
      var title = this.state.title,
          file = this.state.groupImgFile,
          description = this.state.description,
          memberNoun = this.state.memberNoun,
          zipcode = this.state.zipcode;

      var formData = new FormData();

      if (file !== null){
        formData.append("group[group_img]", file);
      }

      if (memberNoun !== ""){
        formData.append("group[member_noun]", memberNoun);
      }

      formData.append("group[title]", title);
      formData.append("group[description]", description);
      formData.append("group[zipcode]", zipcode);

      $('body').addClass("wait");
      this.setState({pendingSubmit: true});
      GroupApiUtil.createGroup(formData).then(this._redirectOnSuccess, this._removeWait);
    }
  },

  _redirectOnSuccess: function(group){
    this.props.stopCreateGroup();
    this.history.pushState(null, "/groups/" + group.id);
    $('body').removeClass("wait");
  },

  _removeWait: function() {
    $('body').removeClass("wait");
    this.setState({pendingSubmit: false});
  },

  displayFileName: function(){
    if (this.state.groupImgUrl !== "") {
      return(
        <label className="modal-image-button"> {this.state.groupImgUrl}
          <input type="file" onChange={this._changeFile}/>
        </label>
      );
    } else {
      return(
        <label className="modal-image-button"> Choose an image to represent your group
          <input type="file" onChange={this._changeFile}/>
        </label>
      );
    }
  },

  displayTempGroup: function(){
    if (this.state.groupImgUrl !== ""){
      return (
        <div className="modal-group-image-preview">
          <img className="modal-group-image center-image" src={this.state.groupImgUrl}/>
            <div className="modal-preview-details">
              <h2>{this.state.title}</h2>
              <h3 className="modal-preview-members">{"We're " + 1 + " " + this.state.memberNoun}</h3>
            </div>
        </div>
      );
    }
  },

  render: function(){
    return(
      <div className="modal-background">
        <form className="modal-form group" onSubmit={this._handleSubmit}>

          <img className="form-background center-image" src={FightClub.modal_background} />

          <div className="modal-exit" onClick={this.props.stopCreateGroup}>X</div>
          <h1 className="modal-form-header"> New Group </h1>
          <label className="modal-label"> What is your group's name?
            <input className="modal-input" type="text" valueLink={this.linkState("title")}/>
          </label>

          <label className="modal-label"> What is your group about?
            <textarea className="modal-input" rows="5" valueLink={this.linkState("description")}></textarea>
          </label>

          <label className="modal-label"> Where is your group located? (zipcode)
            <input className="modal-input-zipcode" type="text" valueLink={this.linkState("zipcode")}/>
          </label>

          <label className="modal-label"> What would you like to call your group members?
            <input className="modal-input" type="text" valueLink={this.linkState("memberNoun")}/>
          </label>

          {this.displayTempGroup()}

          <label className="modal-image-button"> Choose an image to represent your group
            <input type="file" onChange={this._changeFile}/>
          </label>

          <button className="modal-submit-button"> Create Group </button>

        </form>
      </div>
    );
  }
});
