var UserGroups = React.createClass({

  mixins: [ReactRouter.History],

  handleClick: function(id){
    this.history.pushState(null, "/groups/" + id);
  },

  render: function(){
    return(
      <div className="group-index group">
        {this.props.groups.map(function(group){
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
