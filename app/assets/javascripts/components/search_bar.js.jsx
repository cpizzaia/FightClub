var SearchBar = React.createClass({
  render: function(){
    return (
      <section className="search-bar group">
        <input type="text" className="search-bar-input" placeholder="Search"/>
        <span className="search-bar-icon"></span>
      </section>
    );
  }
});
