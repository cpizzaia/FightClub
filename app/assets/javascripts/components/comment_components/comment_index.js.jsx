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
    this.setState({comments: CommentStore.all()});
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

                  {comment.responses.map(function(response){
                    return (<Response key={response.id} response={response}/>);
                  })}

                </section>

              </section>
            );
          })}
        </section>
      );
    } else {
      return <div></div>;
    }
  }
});
