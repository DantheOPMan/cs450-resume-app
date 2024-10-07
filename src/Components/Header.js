import React from 'react';

const Header = ({ data }) => {
  return (
    <header className="resume-header">
      <div className="personal-info">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
      </div>
      <div className="contact-info">
        <p>Email: <a href={`mailto:${data.email}`}>{data.email}</a></p>
        <p>Web: <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a></p>
        <p>Mobile: {data.mobile}</p>
      </div>
    </header>
  );
};

export default Header;
