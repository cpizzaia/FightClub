var GroupIndex = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function(){
    return({groups: GroupStore.all(), page: 2});
  },

  componentDidMount: function(){
    window.addEventListener('scroll', this._handleScroll);
    GroupStore.addChangeListener(this._changed);
    GroupStore.fetchGroupsByPage(1);
  },

  componentWillUnmount: function(){
    window.removeEventListener('scroll', this._handleScroll);
    GroupStore.removeChangeListener(this._changed);
  },

  _handleScroll: function(){
    if (window.scrollY > $(document).height() - $(window).height() - 100){
      GroupStore.fetchGroupsByPage(this.state.page);
      this.setState({page: this.state.page + 1});
    }
  },

  _changed: function(){
    this.setState({groups: GroupStore.all()});
  },

  _handleClick: function(id){
    this.history.pushState(null, "/groups/" + id);
  },

  render: function(){
    return(
      <div className="group-index group">
        {this.state.groups.map(function(group){
          return(
          <div onClick={this._handleClick.bind(this, group.id)} key={group.id} className="group-index-item">
            <img key={group.image} className="group-index-image center-image" src={group.group_img_url}/>
            <div key={group.title} className="group-index-details">
              <h2>{group.title}</h2>
              <h3 key={group.member_noun} className="group-index-members">{"We're " + group.member_count + " " + group.member_noun}</h3>
            </div>
          </div>
          );
        }.bind(this))}
      </div>
    );
  }
});
