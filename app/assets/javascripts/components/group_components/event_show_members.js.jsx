var EventShowMembers = React.createClass({
  render: function(){
    return (
      <div className="event-show-members-container">
        <h2 className="event-show-member-count">{this.props.members.length + " going"}</h2>
        {this.props.members.map(function(member){
          return (
            <div key={member.id} className="event-show-member-item group">

              <h2 className="event-show-member-name">{member.name}</h2>

              <a className="event-show-member-image-container" href={"#/users/" + member.id}>
                <img className="event-show-member-image center-image" src={member.profile_img_url}/>
              </a>

            </div>
          );
        })}
      </div>
    );
  }
});
