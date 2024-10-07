import React from 'react';

const PersonalProfile = ({ data }) => {
  return (
    <section className="personal-profile">
      <h3>Personal Profile</h3>
      <p>{data.description}</p>
    </section>
  );
};

export default PersonalProfile;
