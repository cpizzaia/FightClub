var LandingPage = React.createClass({

  render: function(){
    return (
      <div>
        <img className="description" src={FightClub.description}/>
        <div className="welcome-banner"></div>
        <GroupIndex />
      </div>
    );
  }
});
