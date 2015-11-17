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
    var html;
    if (typeof this.state.groups !== "undefined"){
      html = this.state.groups.length;
    }
    return(
      <div className="group-index">
        {html}
      </div>
    );
  }
});
