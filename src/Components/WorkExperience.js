import React from 'react';

const WorkExperience = ({ data }) => {
  const { workExperienceData, projectsData, leadershipData } = data;
  return (
    <section className="work-experience">
      <h3>Experience</h3>
      {workExperienceData.map((job, index) => (
        <div key={index} className="job">
          <p><strong>{job.company}</strong>, {job.location}</p>
          <p>{job.title} ({job.duration})</p>
          <ul>
            {job.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Projects</h3>
      {projectsData.map((project, index) => (
        <div key={index} className="project">
          <p><strong>{project.name}</strong></p>
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Leadership & Activities</h3>
      <p><strong>{leadershipData.organization}</strong>, {leadershipData.location}</p>
      <ul>
        {leadershipData.roles.map((role, i) => (
          <li key={i}>{role}</li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
