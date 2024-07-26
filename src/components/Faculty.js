import React from 'react';
import '../components/assets/faculty.css';
import Navbar from './Navbar';

const Faculty = () => {
  const facultyProfiles = [
    {
      name: 'John Doe',
      position: 'Principal',
      qualification: 'M.Ed',
      experience: '20 years of experience in educational administration'
    },
    {
      name: 'Jane Smith',
      position: 'Vice Principal',
      qualification: 'M.Sc. in Physics',
      experience: '15 years of teaching experience'
    },
    {
      name: 'Emily Johnson',
      position: 'English Teacher',
      qualification: 'M.A. in English',
      experience: '10 years of teaching experience'
    },
    {
      name: 'Michael Brown',
      position: 'Mathematics Teacher',
      qualification: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience'
    },
    {
      name: 'Sophia Davis',
      position: 'Science Teacher',
      qualification: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience'
    },
    {
      name: 'David Wilson',
      position: 'Computer Science Teacher',
      qualification: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience'
    }
  ];

  return (
    <div><Navbar/>
    <div className="faculty-container">
      
      <h1>Faculty Profiles</h1>
      <div className="faculty-list">
        {facultyProfiles.map((profile, index) => (
          <div key={index} className="faculty-profile">
            <h2>{profile.name}</h2>
            <p><strong>Position:</strong> {profile.position}</p>
            <p><strong>Qualification:</strong> {profile.qualification}</p>
            <p><strong>Experience:</strong> {profile.experience}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Faculty;
