var EventCreate = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return({
      title: "",
      description: "",
      startTime: "",
      address: "",
      pendingSubmit: false
    });
  },

  _handleSubmit: function(e){
    e.preventDefault();
    if (new Date(this.state.startTime) > new Date() && this.state.pendingSubmit !== true){

      var
      title = this.state.title,
      description = this.state.description,
      startTime = this.state.startTime,
      address = this.state.address;
      groupId = this.props.groupId;

      var formData = new FormData();

      formData.append("event[title]", title);
      formData.append("event[description]", description);
      formData.append("event[address]", address);
      formData.append("event[start_time]", startTime);
      formData.append("event[group_id]", groupId);



      $('body').addClass("wait");
      this.setState({pendingSubmit: true});
      EventApiUtil.createEvent(formData).then(this._redirectOnSuccess, this._removeWait);
    }
  },

  _redirectOnSuccess: function(id){
    this.props.stopCreateEvent();
    $('body').removeClass("wait");
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

          <div className="modal-exit" onClick={this.props.stopCreateEvent}>X</div>

          <h1 className="modal-form-header"> New Event </h1>

          <label className="modal-label"> Name of event
            <input className="modal-input" type="text" valueLink={this.linkState("title")}/>
          </label>

          <label className="modal-label"> Description of event
            <textarea className="modal-input" rows="5" valueLink={this.linkState("description")}></textarea>
          </label>

          <label className="modal-label"> Location of event
            <input className="modal-input" type="text" valueLink={this.linkState("address")}/>
          </label>

          <label className="modal-label"> Start time of event
            <input className="modal-input" type="datetime-local" valueLink={this.linkState("startTime")}/>
          </label>

          <button className="modal-submit-button"> Create Event </button>

        </form>
      </div>
    );
  }

});
