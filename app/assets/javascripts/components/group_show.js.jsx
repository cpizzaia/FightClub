var GroupShow = React.createClass({
  getInitialState: function(){
    return({group: GroupStore.group()});
  },

  componentDidMount: function(){
    GroupStore.addChangeListener(this._changed);
    GroupStore.fetchGroup(this.props.routeParams.id);
  },

  componentWillUnmount: function(){
    GroupStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({group: GroupStore.group()});
  },

  render: function(){
    var html;
    if (typeof this.state.group !== "undefined"){
      html = (
        <div className="group-show-container group">

          <article className="group-show-description">{this.state.group.description}</article>

            <div className="group-event-index-container">
              <h1 className="group-event-index-header">Events:</h1>
              {this.state.group.events.map(function(event){
                return (<GroupEventIndex key={event.id} event={event}/>);
              })}
            </div>


          <div className="group-show-sidebar">
            <img className="group-show-image" src={this.state.group.image}/>
            <p className="group-show-member-count">Members: {this.state.group.members.length}</p>
          </div>

        </div>
        );
    }
    return (<div>{html}</div>);
  }


});
