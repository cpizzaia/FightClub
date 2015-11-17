(function () {
  $(document).ready(function () {
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;

    var App = React.createClass({
      render: function(){
        return (
            <div>
              {this.props.children}
            </div>
        );
      }
    });
    var routes = (
        <Route path="/" component={App}>
          <Route path="/profile" component={Profile} />
        </Route>
    );
    React.render(<Router>{routes}</Router>, root);
  });
})();
