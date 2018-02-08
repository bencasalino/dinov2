import React from "react";
import ProfileCard from "./ProfileCard";

const ProfilesList = props => {
  const dinosaurs = props.dinosaurs;
  console.log("dinosaurs", dinosaurs);

  return dinosaurs.map(dinosaur => {
    return <ProfileCard key={dinosaur.name} dinosaur={dinosaur} />;
  });
};

export default ProfilesList;
