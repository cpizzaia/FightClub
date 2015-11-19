var GroupEventIndex = React.createClass({
  render: function(){
    return(
      <div>
        <h2 className="group-event-index-title">{this.props.event.title}</h2>
        <h3 className="group-event-index-start-time">{this.props.event.start_date}</h3>
        <h3 className="group-event-index-address">{this.props.event.address}</h3>
        <h4 className="group-event-index-address">Members going: {this.props.event.users.length}</h4>
        <article className="group-event-index-description">{this.props.event.description}</article>
      </div>
    );
  }
});
