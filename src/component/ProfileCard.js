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
  render() {
    return (
      <li className="profile-card">
        <header onClick={this.toggleFunction} className="profile-header">
          <img src={this.props.dinosaur.image} />
          <h2>{this.props.dinosaur.name}</h2>
        </header>

        <section className={this.state.toggleClass ? "skills-container hidden" : "skill-container"}>
          <h4>Skills</h4>
          <ul className="skill-list">
            <li>{this.props.dinosaur.skills}</li>
          </ul>
        </section>
      </li>
    );
  }
}

export default ProfileCard;
