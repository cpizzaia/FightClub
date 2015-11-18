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
          <img className="group-show-image" src={this.state.group.image}/>
          <article className="group-show-description">{this.state.group.description}</article>
        </div>
        );
    }
    return (<div>{html}</div>);
  }


});
