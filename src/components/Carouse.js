// src/components/Carousel.js

import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import Logo1 from'../../src/components/assets/image2.jpeg';
import Logo2 from'../../src/components/assets/scexhib1.jpeg';
import Logo3 from'../../src/components/assets/scexhib2.jpeg';
import Logo4 from'../../src/components/assets/cultural.png';
import './assets/Carousel.css';

const Carouse = () => {
  return (
    <ResponsiveCarousel showArrows autoPlay infiniteLoop>
      <div>
        <img src={Logo1} alt="Event 1" />
        <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
      </div>
      <div>
        <img src={Logo2} alt="Event 1" />
        <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
      </div>
      <div>
        <img src={Logo3} alt="Event 1" />
        <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
      </div>
      <div>
        <img src={Logo4} alt="Event 1" />
        <p className="legend">Cultural Fest - Embracing Diversity and Creativity</p>
      </div>
      
      {/* Add more slides as needed */}
    </ResponsiveCarousel>
  );
}

export default Carouse;
