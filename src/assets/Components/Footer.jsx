import React from "react";
import './Footer.css';
function Footerd(){
    return(
        <>
         <footer className="footer">
        <div>
          <h3>MediCare Hospital</h3>
          <p>Your health is our priority.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Booking</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: info@medicare.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Chennai, India</p>
        </div>
      </footer>
        </>
    );
}
export default Footerd;