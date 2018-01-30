import React from "react";
import { SkillList } from "./Skill-list";

export class Section extends React.Component {
  constructor(props) {
    super(props);
    this.listItem = this.listItem.bind(this);
  }
  clickHandler(event) {
    if (event.target.parentNode.classList.contains("profile-header")) {
      event.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden");
    }
  }

  listItem(data) {
    return (
      <li className="profile-card" onClick={this.clickHandler}>
        <header className="profile-header">
          <img src={data.image} alt={data.name} />
          <h2>{data.name}</h2>
        </header>
        <section className="skills-container hidden">
          <h4>Skills</h4>
          <ul className="skills-list">
            <SkillList dinosaurs={data} />
          </ul>
        </section>
      </li>
    );
  }
  render() {
    return (
      <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">{this.props.dinosaurs.map(this.listItem)}</ul>
      </section>
    );
  }
}
