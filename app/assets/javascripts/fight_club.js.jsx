(function () {
  $(document).ready(function () {
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

    var routes = (
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/groups" component={GroupIndex} />
          <Route path="/groups/:id/members" component={GroupShow} />
          <Route path="/groups/:id" component={GroupShow} />
            <Route path="/groups/:id/events/:event_id" components={{group: GroupShow, event: EventShow}} />
          <Route path="/users/:id" component={MemberProfile} />
        </Route>
    );
    React.render(<Router>{routes}</Router>, root);
  });
})();
