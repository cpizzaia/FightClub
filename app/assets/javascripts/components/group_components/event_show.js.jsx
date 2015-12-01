var EventShow = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function(){
    return ({event: EventStore.event()});
  },

  componentDidMount: function(){
    debugger;
    EventStore.addChangeListener(this._changed);
    EventStore.fetchEvent(this.props.params.event_id);
  },

  componentWillUnmount: function(){
    EventStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({event: EventStore.event()});
  },

  render: function(){
    if (typeof this.state.event.id !== "undefined") {
      return (
        <section className="event-show-container group">

          <section className="event-show-content">

            <h1 className="event-show-header">{this.state.event.title}</h1>
            <h2 className="event-show-date">{this.state.event.start_date}</h2>
            <h2 className="event-show-location">{this.state.event.address}</h2>
            <article className="event-show-description">{this.state.event.description}</article>

          </section>


          <section className="event-show-members">

            <EventShowMembers members={this.state.event.users} />

          </section>

        </section>
      );
    } else {
      return <div></div>;
    }
  }
});
