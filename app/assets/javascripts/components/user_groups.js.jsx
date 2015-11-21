var UserGroups = React.createClass({

  mixins: [ReactRouter.History],

  handleClick: function(id){
    this.history.pushState(null, "/groups/" + id);
  },

  render: function(){
    return(
      <div className="profile-group-container group">
        {this.props.groups.map(function(group){
          return(
          <div className="profile-group-item group" onClick={this.handleClick.bind(this, group.id)}>
            <div key={group.id} className="profile-group-image-container">
              <img key={group.image} className="profile-group-image" src={group.image}/>
            </div>
            <div className="profile-group-title-container">
              <h2 key={group.title} className="profile-group-title">{group.title}</h2>
            </div>
          </div>
          );
        }.bind(this))}
      </div>
    );
  }
});
