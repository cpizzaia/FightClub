var CommentIndex = React.createClass({
  getInitialState: function(){
    return ({comments: CommentStore.all});
  },

  componentDidMount: function(){
    CommentStore.addChangeListener(this._changed);
    CommentStore.fetchComments(this.props.eventId);
  },

  componentWillUnmount: function(){
    CommentStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({comments: CommentStore.all});
  },

  render: function(){
    if (this.state.comments.length !== 0){
      return (
        <section className="comments-container">
          {this.state.comments.map(function(comment){
            return (
              <section className="comment-item">

                <div className="comment-author-image-container">
                  <img className="comment-author-image center-image"/>
                </div>

                <h3 className="author-name">{comment.author.name}</h3>

                <article className="comment-body">{comment.body}</article>

              </section>
            );
          })}
        </section>
      );
    }
  }
});
