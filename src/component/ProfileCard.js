import React from "react";

export class ProfileCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleClass: true
    };
  }

  toggleFunction = () => {
    this.setState({ toggleClass: !this.state.toggleClass });
  };

  showSkill = this.props.dinosaur.skills.map((skill, index) => {
    return <li key={index}> {skill} </li>;
  });
  
  render() {
    return <li className="profile-card">
        <header onClick={this.toggleFunction} className="profile-header">
          <img src={this.props.dinosaur.image} />
          <h2>{this.props.dinosaur.name}</h2>
        </header>

        <section className={this.state.toggleClass ? "skills-container hidden" : "skill-container"}>
          <h4>Skills</h4>
          <ul className="skill-list">
              {this.showSkill}
          </ul>
        </section>
      </li>;
  }
}

export default ProfileCard;
