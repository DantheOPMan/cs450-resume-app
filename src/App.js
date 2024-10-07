// App.js
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import PersonalProfile from './Components/PersonalProfile';
import WorkExperience from './Components/WorkExperience';
import Skills from './Components/Skills';
import Education from './Components/Education';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerData: {
        name: 'Daniel Yankovich',
        title: 'Junior Developer',
        email: 'danielyankovich03@gmail.com',
        website: 'https://github.com/DantheOPMan',
        mobile: '201-625-3839'
      },
      profileData: {
        description: 'Junior Developer specializing in web and game development with a focus on Unity and MERN stack.'
      },
      educationData: {
        institution: 'New Jersey Institute of Technology',
        location: 'Newark, NJ',
        degree: 'Bachelor of Science, Computer Science',
        graduation: 'Expected Graduation: May 2025',
        gpa: 'GPA: 3.51',
        honors: 'Honors College Dorman Scholar. Dean’s List'
      },
      workExperienceData: [
        {
          company: 'Oh Baby Games',
          location: 'Singapore',
          title: 'Junior Developer',
          duration: 'August 2024 – Present',
          responsibilities: [
            'Developing a monster battle game in Unity with turn-based strategic elements.',
            'Building a .NET-based RESTful API on Azure for live multiplayer functionality.',
            'Designed and implemented core gameplay elements for over 30 monster species.',
            'Collaborating on blockchain integration for in-game assets and ecosystem development.'
          ]
        },
        {
          company: 'Teaneck Community Scholarship Fund',
          location: 'Teaneck, NJ',
          title: 'Volunteer Developer',
          duration: 'January 2020 – May 2021',
          responsibilities: [
            'Developed and deployed a scalable website using modern frameworks.'
          ]
        }
      ],
      projectsData: [
        {
          name: 'Oh Baby Markets (OBB Gamble)',
          details: [
            'Developed a live MERN stack platform for betting on live tournaments, Blackjack, Plinko, and Poker using BP (in-game currency).',
            'Implemented Google user authentication and admin controls for market management.',
            'Technologies: React, Material UI, Express, Node.js, MongoDB, Firebase, Jest, Heroku, GIT'
          ]
        },
        {
          name: 'Zombie Valley Survival',
          details: [
            'First-person horde shooter with progression mechanisms and in-game economy.',
            'Technologies: Unity, C#'
          ]
        }
      ],
      leadershipData: {
        organization: 'Phi Sigma Kappa',
        location: 'Newark, NJ',
        roles: [
          'President, Philanthropy Committee Head, Risk Chair',
          'Led the organization and coordinated fundraisers for Special Olympics of New Jersey.'
        ]
      },
      skillsData: {
        programmingLanguages: 'Java, Python, C++, SQL, React, Javascript, C#, Git',
        technical: 'OCI Architect Associate, Bloomberg Certified, Da Vinci Resolve',
        language: 'Fluent in Hebrew'
      }
    };
  }

  render() {
    const { headerData, profileData, educationData, workExperienceData, skillsData, projectsData, leadershipData } = this.state;
    return (
      <div className="resume-container">
        <Header data={headerData} />
        <PersonalProfile data={profileData} />
        <Education data={educationData} />
        <WorkExperience data={{ workExperienceData, projectsData, leadershipData }} />
        <Skills data={skillsData} />
      </div>
    );
  }
}

export default App;
