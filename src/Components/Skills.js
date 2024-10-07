import React from 'react';

const Skills = ({ data }) => {
  return (
    <section className="skills">
      <h3>Skills/Certifications</h3>
      <p>Programming Languages: {data.programmingLanguages}</p>
      <p>Technical: {data.technical}</p>
      <p>Language: {data.language}</p>
    </section>
  );
};

export default Skills;
