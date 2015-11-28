var GroupShowEvents = React.createClass({
  render: function(){
    return (
      <div className="group-event-index-container">

        <h1 className="group-event-index-header">Events:</h1>

        <nav className="group-event-tab-container group">
          {this.props.tabs()}
        </nav>

        {this.props.eventFilter()}

      </div>
    );
  }
});
