import React from 'react';

import home from '../home4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
// import ExampleCarouselImage from 'Components/ExampleCarouselImage';
function Homed(){
    return(
        <>
         {/* <Nav fill variant="tabs" defaultActiveKey="/home">
         <h3>MediCare</h3>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Booking</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Doctors</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">Department</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6">Contactus</Nav.Link>
      </Nav.Item>
      
    </Nav> */}

    <Carousel>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={home}
        alt="Hospital"
        style={{ height: '550px', objectFit: 'cover' }}
      />
        <Carousel.Caption>
         <h3>Welcome to MediCare</h3>
        <p>Your health is our priority.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={home}
        alt="Hospital"
        style={{ height: '550px', objectFit: 'cover' }}
      />
       <Carousel.Caption>
          <h3>Quality Healthcare</h3>
        <p>We care for your health and well-being.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
         <img
        className="d-block w-100"
        src={home}
        alt="Hospital"
        style={{ height: '550px', objectFit: 'cover' }}
      />
    
        <Carousel.Caption>
           <h3>Experienced Doctors</h3>
        <p>Get the best care from our medical team.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

 <section className="welcome">
        <h2>Welcome to MediCare Hospital</h2>
        <p>
          We provide quality medical services, experienced
          healthcare professionals, and advanced treatment
          for all your health needs.
        </p>
      </section>

      
      {/* <footer className="footer">
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
     */}

    
        </>
    );
}
export default Homed;