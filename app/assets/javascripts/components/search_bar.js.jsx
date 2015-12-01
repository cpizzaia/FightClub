var SearchBar = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return({query: ""});
  },

  _handleChange: function(e){
    e.preventDefault();
    if (e.currentTarget.value === ""){
      GroupStore.clearGroups();
      GroupApiUtil.fetchGroupsByPage(1);
    } else {
      SearchApiUtil.search(e.currentTarget.value);
    }
  },

  render: function(){
    return (
      <form className="search-bar group">

        <input type="text" className="search-bar-input"
          placeholder="Find Your Fight"
          onChange={this._handleChange}/>

        <span className="search-bar-icon"></span>
      </form>
    );
  }
});
