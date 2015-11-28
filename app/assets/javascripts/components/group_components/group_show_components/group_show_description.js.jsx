var GroupShowDescription  = React.createClass({
  render: function(){
    return (
        <section className="group-show-description-container">

          <article className="group-show-description">
            {this.props.group.description}
          </article>
          <section className="group-show-lower-description group">
            <h2 className="group-description-noun">{"We're " + this.props.group.members.length + " " + this.props.group.member_noun}</h2>
            {this.props.memberOfGroup()}
            <GroupMemberList members={this.props.group.members.slice(0,12)} />
          </section>

      </section>
    );
  }
});
