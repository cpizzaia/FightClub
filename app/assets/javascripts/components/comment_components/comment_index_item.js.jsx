var CommentIndexItem = React.createClass({

  render: function(){
    return (
      <section className="comment-item group">

        <div className="comment-author-image-container">
          <img src={this.props.comment.author.profile_img_url} className="comment-author-image center-image"/>
        </div>

        <section className="comment-details">
          <h3 className="comment-author-name">{this.props.comment.author.name}</h3>
          <article className="comment-body">{this.props.comment.body}</article>
          <p className="comment-reply">Reply</p>
          {this.props.comment.responses.map(function(response){
            return (<Response key={response.id} response={response}/>);
          })}

        </section>

      </section>
    );
  }

});
