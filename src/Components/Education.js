import React from 'react';

const Education = ({ data }) => {
  return (
    <section className="education">
      <h3>Education</h3>
      <p><strong>{data.institution}</strong>, {data.location}</p>
      <p>{data.degree}</p>
      <p>{data.graduation}</p>
      <p>{data.gpa}</p>
      <p>{data.honors}</p>
    </section>
  );
};

export default Education;
