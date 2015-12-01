var EventShow = React.createClass({

  render: function(){
    if (typeof this.props.event.id !== "undefined") {
      return (
        <section className="event-show-container group">

          <section className="event-show-content">

            <h1 className="event-show-header">{this.props.event.title}</h1>
            <h2 className="event-show-date">{this.props.event.start_date}</h2>
            <h2 className="event-show-location">{this.props.event.address}</h2>
            <article className="event-show-description">{this.props.event.description}</article>

          </section>


          <section className="event-show-members">

            <EventShowMembers members={this.props.event.users} />

          </section>

        </section>
      );
    } else {
      return <div></div>;
    }
  }
});