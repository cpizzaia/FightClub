var App = React.createClass({
  render: function(){
    return (
        <div>
          <HeaderToolbar />
          {this.props.children}
        </div>
    );
  }
});
