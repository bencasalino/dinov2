import React from "react";

export class SkillList extends React.Component {
  listItem(data) {
    return <li>{data}</li>;
  }
  render() {
    return <ul className="skills-list">{this.props.dinosaurs.skills.map(this.listItem)}</ul>;
  }
}
