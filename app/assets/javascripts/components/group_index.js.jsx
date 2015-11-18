var GroupIndex = React.createClass({

  getInitialState: function(){
    return({groups: GroupStore.all()});
  },

  componentDidMount: function(){
    GroupStore.addChangeListener(this._changed);
    GroupStore.fetch();
  },

  componentWillUnmount: function(){
    GroupStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({groups: GroupStore.all()});
  },

  render: function(){
    return(
      <div className="group-index">
        {this.state.groups.map(function(group){
          return(
          <div>
            <img className="index-group-image" src={group.image}/>
            <h2 className="index-group-title">{group.title}</h2>
          </div>
          );
        })}
      </div>
    );
  }
});
