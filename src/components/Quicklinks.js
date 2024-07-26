
import '../components/assets/QuickLinks.css';
import React from 'react';


const Quicklinks = () => {
  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="/admissions">Admissions</a></li>
        <li><a href="/academics">Academics</a></li>
        <li><a href="/contact">Contact Us</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Quicklinks;
