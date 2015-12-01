var CommentCreate = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return({event_id: this.props.eventId, body:"", user: UserStore.currentUser()});
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);
    UserStore.fetchCurrentUser();
  },

  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({user: UserStore.currentUser()});
  },

  _handleSubmit: function(e){
    e.preventDefault();

    var body = this.state.body;
    var eventId = this.props.eventId;
    var formData = new FormData();

    formData.append("comment[event_id]", eventId);
    formData.append("comment[body]", body);

    CommentApiUtil.createComment(formData);
  },

  render: function(){
    if (typeof this.state.user.id !== "undefined"){
      return (
        <section className="comment-create-container group">

          <div className="comment-create-image-container">
            <img src={this.state.user.profile_img_url} className="comment-create-image center-image"/>
          </div>

          <form className="comment-create-form group" onSubmit={this._handleSubmit}>
            <textarea className="comment-create-input" placeholder="Say something..." valueLink={this.linkState("body")}></textarea>
            <button className="comment-create-button">Submit</button>
          </form>

        </section>
      );
    } else {
      return(<div></div>);
    }
  }
});
