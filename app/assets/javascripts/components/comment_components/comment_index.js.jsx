var CommentIndex = React.createClass({
  getInitialState: function(){
    return ({comments: CommentStore.all(), user: UserStore.currentUser()});
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);
    CommentStore.addChangeListener(this._changed);
    CommentStore.fetchComments(this.props.eventId);
  },

  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._changed);
    CommentStore.removeChangeListener(this._changed);
    CommentStore.clearComments();
  },

  _changed: function(){
    this.setState({comments: CommentStore.all(), user: UserStore.currentUser()});
  },

  _showReplyLinks: function(){
    if (typeof this.state.user.id !== "undefined"){
      return(<p className="comment-reply">Reply</p>);
    }
  },

  render: function(){
    if (this.state.comments.length !== 0){
      return (
        <section className="comments-container">

          <CommentCreate eventId={this.props.eventId}/>

          {this.state.comments.map(function(comment){
            return (
              <section key={comment.id} className="comment-item group">

                <div className="comment-author-image-container">
                  <img src={comment.author.profile_img_url} className="comment-author-image center-image"/>
                </div>

                <section className="comment-details">
                  <h3 className="comment-author-name">{comment.author.name}</h3>
                  <article className="comment-body">{comment.body}</article>
                  {this._showReplyLinks()}
                  {comment.responses.map(function(response){
                    return (<Response key={response.id} response={response}/>);
                  })}

                </section>

              </section>
            );
          }.bind(this))}
        </section>
      );
    } else {
      return <div></div>;
    }
  }
});
