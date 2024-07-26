import React from 'react';
import '../components/assets/Student.css';
import Navbar from './Navbar';
import Gallery from './Gallery';

const Student = () => {
  return (
    <div> <Navbar/>
    
    <div className="students-container">
       
      <h1>Life at Springdale</h1>

      <section className="extracurricular-activities">
        <h2>Extracurricular Activities</h2>
        <p>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
      </section>

      <section className="clubs-societies">
        <h2>Clubs and Societies</h2>
        <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>

      <section className="student-council">
        <h2>Student Council</h2>
        <ul>
          <li><strong>President:</strong> Amy Parker, Grade 12</li>
          <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
          <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
        </ul>
      </section>
      <Gallery/>
    </div>
    </div>
  );
};

export default Student;
