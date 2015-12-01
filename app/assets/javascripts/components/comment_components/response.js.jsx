var Response = React.createClass({
  render: function(){
    return (
      <section className="response-container group">

        <div className="comment-author-image-container">
          <img src={this.props.response.author.profile_img_url} className="comment-author-image center-image"/>
        </div>

        <section className="response-details">
          <h3 className="comment-author-name">{this.props.response.author.name}</h3>
          <article className="response-body">{this.props.response.body}</article>
        </section>

      </section>
    );
  }
});
