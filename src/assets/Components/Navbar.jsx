import React from "react";
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function Navbard(){
    return(
        <>
         <Nav fill variant="tabs" defaultActiveKey="/home">
         <h3>MediCare</h3>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><Link to="/about">About</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3"><Link to="/booking">Booking</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4"><Link to="/doctor">Doctors</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5"><Link to="/department">Department</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6"><Link to="/contactus">Contactus</Link></Nav.Link>
      </Nav.Item>
      
    </Nav>
        </>
    );
}
export default Navbard;