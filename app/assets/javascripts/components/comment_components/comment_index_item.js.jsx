var CommentIndexItem = React.createClass({
  getInitialState: function(){
    return({replyField: false});
  },

  _showReply: function(){
    if (this.state.replyField){
      return(<p onClick={this._toggleReplyField} className="comment-reply">Cancel</p>);
    } else if (typeof this.props.user.id !== "undefined"){
      return(<p onClick={this._toggleReplyField} className="comment-reply">Reply</p>);
    }
  },

  _toggleReplyField: function(){
    if (this.state.replyField){
      this.setState({replyField: false});
    } else {
      this.setState({replyField: true});
    }
  },

  _showReplyField: function(){
    if (this.state.replyField){
      return(<ReplyCreate toggleReplyField={this._toggleReplyField} parentCommentId={this.props.comment.id} user={this.props.user}/>);
    }
  },

  render: function(){
    return (
      <section className="comment-item group">

        <div className="comment-author-image-container">
          <img src={this.props.comment.author.profile_img_url} className="comment-author-image center-image"/>
        </div>

        <section className="comment-details">
          <h3 className="comment-author-name">{this.props.comment.author.name}</h3>
          <article className="comment-body">{this.props.comment.body}</article>
          {this._showReplyField()}
          {this._showReply()}
          {this.props.comment.responses.map(function(response){
            return (<Response key={response.id} response={response}/>);
          })}

        </section>

      </section>
    );
  }

});
