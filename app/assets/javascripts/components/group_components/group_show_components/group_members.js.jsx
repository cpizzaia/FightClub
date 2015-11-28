var GroupMembers = React.createClass({

  render: function(){
    return (
      <div className="group-show-description-container">
        {this.props.members.map(function(member){
          return (
            <div key={member.id} className="group-member-item group">

              <h2 className="group-member-name">{member.name}</h2>

              <a className="group-member-image-container" href={"#/users/" + member.id}>
                <img className="group-member-item-image center-image" src={member.profile_img_url}/>
              </a>
              
            </div>
          );
        })}
      </div>
    );
  }


});
