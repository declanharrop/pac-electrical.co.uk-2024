import React from 'react';
import { ContactStyles } from './Footer.styles';
import Accreds from './Accreds';

export default function Contact() {
  return (
    <ContactStyles>
      <div className="contact-grid">
        <div className="address">
          <h3>PowerandControl Ltd</h3>
          <p>Unit 2, Colemans Yard</p>
          <p>Alfreton Road</p>
          <p>Derby</p>
          <p>DE21 4AL</p>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <div className="contact-section">
            <p className="title">Phone:</p>
            <a href="tel:+441332552320" className="call-click">
              <p>01332 552 320</p>
            </a>
          </div>
          <div className="contact-section">
            <p className="title">Email:</p>
            <a
              href="mailto:enquiries@pac-electrical.co.uk"
              className="email-click"
            >
              <p>enquiries@pac-electrical.co.uk</p>
            </a>
          </div>
        </div>
      </div>
      <Accreds />
    </ContactStyles>
  );
}
