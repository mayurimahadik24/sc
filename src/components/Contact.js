
// Contact.js

import React from 'react';
import ContactForm from './ContactForm';
import '../components/assets/Contact.css';
import Map from './Map';
import Navbar from './Navbar';

const Contact = () => {
    return (
      <div>
        <Navbar/>
      <div className="contact-container">
        
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@springdale.edu</p>
        </div>
        <Map/>
        <div>
          <p>    </p>
        </div>
        <ContactForm />
        <div>
                Made by Mayuri
        </div>

      </div>  
      </div>
    );
  };
export default Contact;
