var ReplyCreate = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return({body:""});
  },

  _handleSubmit: function(e){
    e.preventDefault();

    var body = this.state.body;
    var parentCommentId = this.props.parentCommentId;
    var formData = new FormData();

    formData.append("comment[parent_comment_id]", parentCommentId);
    formData.append("comment[body]", body);

    CommentApiUtil.createReply(formData).then(this.props.toggleReplyField);
  },

  render: function(){
    return (
      <section className="comment-create-container group">

        <div className="comment-create-image-container">
          <img src={this.props.user.profile_img_url} className="comment-create-image center-image"/>
        </div>

        <form className="comment-create-form group" onSubmit={this._handleSubmit}>
          <textarea className="reply-create-input" placeholder="Say something..." valueLink={this.linkState("body")}></textarea>
          <button className="comment-create-button">Submit</button>
        </form>

      </section>
    );
  }
});
