(function () {
  $(document).ready(function () {
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

    var routes = (
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage} />
          <Route path="/session/new" component={NewSession} />
          <Route path="/profile" component={Profile} />
          <Route path="/groups" component={GroupIndex} />
          <Route path="/groups/:id" component={GroupShow} />
        </Route>
    );
    React.render(<Router>{routes}</Router>, root);
  });
})();
