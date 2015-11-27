var GroupMembers = React.createClass({

  render: function(){
    return (
      <div className="group-members-container">
        {this.props.members.map(function(member){
          return (
            <div key={member.id} className="group-member-item group">
              <h2 className="group-member-name">{member.name}</h2>
              <div className="group-member-image-container">
                <img className="group-member-item-image center-image" src={member.profile_img_url}/>
              </div>
            </div>
          );
        })}
      </div>
    );
  }


});
