// src/components/SchoolDetails.js

import React from 'react';
import Navbar from './Navbar';
import '../components/assets/about.css';
// import Loader from 'react-loaders';

const Aboutus = () => {
  return (
    
    <div><Navbar/>
    <div className="school-details">
       
      <section className="section history">
        <h2>History</h2>
        <p>
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
        </p>
      </section>

      <section className="section vision">
        <h2>Vision</h2>
        <p>
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </section>

      <section className="section mission">
        <h2>Mission</h2>
        <p>
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
      </section>

      <section className="section principal-message">
        <h2>Principal's Message</h2>
        <blockquote>
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </blockquote>
      </section>

      <section className="section facilities">
        <h2>Infrastructure and Facilities</h2>
        <ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
    </div>
    // <Loader type="pacman"/>
    // </>
  );
}

export default Aboutus;
