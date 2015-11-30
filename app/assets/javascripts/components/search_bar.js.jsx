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
      <section className="search-bar group">
        <form onSubmit={this._handleSubmit}>
          <input valueLink={this.linkState("query")} type="text" className="search-bar-input" placeholder="Find Your Fight"/>
        </form>
        <span className="search-bar-icon" onClick={this._handleSubmit}></span>
      </section>
    );
  }
});
