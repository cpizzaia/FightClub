var GroupEventUserList = React.createClass({
  render: function(){
    return(
      <ul className="group-event-user-list group">
        {this.props.users.map(function(user){
          return (
            <li className="group-event-user">
              <img className="group-event-user-image center-image" src={user.profile_img_url}/>
            </li>
          );
        })}
      </ul>
    );
  }
});
