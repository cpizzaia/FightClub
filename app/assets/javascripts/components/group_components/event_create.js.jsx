var EventCreate = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return({
      title: "",
      description: "",
      startTime: "",
      address: "",
    });
  },

  _handleSubmit: function(e){
    e.preventDefault();
    var title = this.state.title,
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


    ApiUtil.createEvent(formData, this._redirectOnSuccess);
  },

  _redirectOnSuccess: function(id){
    this.props.stopCreateEvent();
  },

  render: function(){
    return(
      <div className="modal-background">
        <form className="modal-form group" onSubmit={this._handleSubmit}>

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
