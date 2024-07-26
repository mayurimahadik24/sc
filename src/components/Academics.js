import React from 'react';
import '../components/assets/academics.css'; // Import CSS for styling
import Navbar from './Navbar';

const Academics = () => {
  return (
    <div><Navbar/>
    <div className="academics">
        
      <h1>Academic Programs</h1>
      <section className="curriculum-section">
        <h2>Curriculum</h2>
        <div className="curriculum-level">
          <h3>Primary (Grades 1-5)</h3>
          <p>Subjects: English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        </div>
        <div className="curriculum-level">
          <h3>Secondary (Grades 6-10)</h3>
          <p>Subjects: English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        </div>
        <div className="curriculum-level">
          <h3>Senior Secondary (Grades 11-12)</h3>
          <h4>Science Stream</h4>
          <p>Subjects: Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
          <h4>Commerce Stream</h4>
          <p>Subjects: Accountancy, Business Studies, Economics, Mathematics, English</p>
        </div>
      </section>

      <section className="teaching-methodologies">
        <h2>Teaching Methodologies</h2>
        <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      </section>

      <section className="educational-resources">
        <h2>Educational Resources</h2>
        <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </section>
    </div>
    </div>
  );
};

export default Academics;
