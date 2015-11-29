var GroupMemberList = React.createClass({
  render: function(){
    return(
      <ul className="group-member-list group">
        {this.props.members.map(function(member){
          return (
            <a href={"#/users/" + member.id} key={member.id} className="group-member">
              <img className="group-member-image center-image" src={member.profile_img_url}/>
            </a>
          );
        })}
      </ul>
    );
  }
});
