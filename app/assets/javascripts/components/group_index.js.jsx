var GroupIndex = React.createClass({

  getInitialState: function(){
    return({groups: GroupStore.all()});
  },

  componentDidMount: function(){
    GroupStore.addChangeListener(this._changed);
    GroupStore.fetchAllGroups();
  },

  componentWillUnmount: function(){
    GroupStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({groups: GroupStore.all()});
  },

  render: function(){
    return(
      <div className="group-index group">
        {this.state.groups.map(function(group){
          return(
          <div className="group-index-item">
            <img className="group-index-image" src={group.image}/>
            <h2 className="group-index-title">{group.title}</h2>
          </div>
          );
        })}
      </div>
    );
  }
});
