var CommentIndex = React.createClass({
  getInitialState: function(){
    return ({comments: CommentStore.all(), user: UserStore.currentUser()});
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._changed);
    CommentStore.addChangeListener(this._changed);
    CommentStore.fetchComments(this.props.eventId);
    this.id = window.setInterval(function(){
      CommentStore.fetchComments(this.props.eventId);
    }.bind(this), 3000);
  },

  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._changed);
    CommentStore.removeChangeListener(this._changed);
    CommentStore.clearComments();
    window.clearInterval(this.id);
  },

  _changed: function(){
    this.setState({comments: CommentStore.all(), user: UserStore.currentUser()});
  },

  render: function(){
    if (this.state.comments.length !== 0){
      return (
        <section className="comments-container">

          <CommentCreate eventId={this.props.eventId}/>

          {this.state.comments.map(function(comment){
            return (
              <CommentIndexItem key={comment.id} comment={comment} user={this.state.user}/>
            );
          }.bind(this))}
        </section>
      );
    } else {
      return (
        <section className="comments-container">
          <CommentCreate eventId={this.props.eventId}/>
        </section>
      );
    }
  }
});
