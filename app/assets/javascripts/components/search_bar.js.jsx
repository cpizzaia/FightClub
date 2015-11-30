var SearchBar = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return({query: ""});
  },

  _handleSubmit: function(e){
    e.preventDefault();
    if (this.state.query === ""){
      GroupStore.clearGroups();
      GroupApiUtil.fetchGroupsByPage(1);
    } else {
      SearchApiUtil.search(this.state.query);
    }
  },

  render: function(){
    return (
      <form className="search-bar group" onSubmit={this._handleSubmit}>
        <input valueLink={this.linkState("query")} type="text" className="search-bar-input" placeholder="Find Your Fight"/>
        <span className="search-bar-icon" onClick={this._handleSubmit}></span>
      </form>
    );
  }
});
