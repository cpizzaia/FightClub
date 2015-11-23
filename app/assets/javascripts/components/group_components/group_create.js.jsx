var GroupCreate = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return({
      title: "",
      description: "",
      memberNoun: "",
      zipcode: "",
      groupImgFile: null,
      groupImgUrl: ""
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
    var title = this.state.title,
        file = this.state.groupImgFile,
        description = this.state.description,
        memberNoun = this.state.memberNoun,
        zipcode = this.state.zipcode;

    var formData = new FormData();

    if (file !== null){
      formData.append("group[group_img]", file);
    }

    formData.append("group[title]", title);
    formData.append("group[description]", description);
    // formData.append("group[member_noun]", memberNoun);
    formData.append("group[zipcode]", zipcode);


    ApiUtil.createGroup(formData, this._redirectOnSuccess);
  },

  _redirectOnSuccess: function(id){
    this.props.stopCreateGroup();
    this.history.pushState(null, "/groups/" + id);
  },

  render: function(){
    return(
      <div className="group-create-background">
        <form className="group-create-modal group" onSubmit={this._handleSubmit}>

          <button className="group-create-exit" onClick={this.props.stopCreateGroup}>X</button>
          <h1 className="group-form-header"> New Group </h1>
          <label className="group-create-label"> What is your group's name?
            <input className="group-create-input" type="text" valueLink={this.linkState("title")}/>
          </label>

          <label className="group-create-label"> What is your group about?
            <textarea className="group-create-input" rows="5" valueLink={this.linkState("description")}></textarea>
          </label>

          <label className="group-create-label"> Where is your group located? (zipcode)
            <input className="group-create-input-zipcode" type="text" valueLink={this.linkState("zipcode")}/>
          </label>

          <label className="group-create-label"> What would you like to call your group members?
            <input className="group-create-input" type="text" valueLink={this.linkState("memberNoun")}/>
          </label>

          <label className="group-image-button"> Choose an image to represent your group
            <input className="group-create-input" type="file" onChange={this._changeFile}/>
          </label>

          <button className="group-submit-button"> Create Group </button>

        </form>
      </div>
    );
  }
});
