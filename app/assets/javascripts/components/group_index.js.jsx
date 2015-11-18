var GroupIndex = React.createClass({

  mixins: [ReactRouter.History],

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

  handleClick: function(id){
    this.history.pushState(null, "/groups/" + id);
  },

  render: function(){
    return(
      <div className="group-index group">
        {this.state.groups.map(function(group){
          return(
          <div onClick={this.handleClick.bind(this, group.id)} key={group.id} className="group-index-item">
            <img key={group.image} className="group-index-image" src={group.image}/>
            <h2 key={group.title} className="group-index-title">{group.title}</h2>
          </div>
          );
        }.bind(this))}
      </div>
    );
  }
});
