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
            <img key={group.image} className="group-index-image center-image" src={group.group_img_url}/>
            <div key={group.title} className="group-index-details">
              <h2>{group.title}</h2>
              <h3 key={group.member_noun} className="group-index-members">{"We're " + group.members.length + " " + group.member_noun}</h3>
            </div>
          </div>
          );
        }.bind(this))}
      </div>
    );
  }
});
