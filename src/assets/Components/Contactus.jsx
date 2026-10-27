import React from "react";
import { Container, Row, Col, Navbar, Nav, Card, Button } from "react-bootstrap";
import "./Contactus.css";

function Contact() {
  const contactDetails = [
    {
      title: "Hospital Address",
      details: [
        "123 Health Avenue, Anna Nagar, Chennai, India",
      ],
    },
    {
      title: "Call Us",
      details: ["+91 98765 43210", "+91 91234 56789"],
    },
    {
      title: "Email Support",
      details: [
        "support@medicare.com",
        "appointments@medicare.com",
      ],
    },
    {
      title: "Working Hours",
      details: [
        "Monday - Saturday: 8:00 AM to 8:00 PM",
        "Emergency Services: Open 24/7",
      ],
    },
  ];

  return (
    <div className="contact-page">

      {/* Navigation Bar */}
     

      {/* Contact Heading */}
      <section className="contact-heading text-center">
        <Container>
          <span className="contact-badge">Contact Us</span>

          <h1>We’re Here To Help You Anytime</h1>

          <p>
            Reach out to MediCare Hospital for appointments,
            department inquiries, emergency guidance, and
            general support.
          </p>
        </Container>
      </section>

      {/* Contact Information Cards */}
      <Container className="contact-info">
        <Row className="g-4">
          {contactDetails.map((item) => (
            <Col xs={12} sm={6} lg={3} key={item.title}>
              <Card className="contact-card h-100">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>

                  {item.details.map((detail) => (
                    <Card.Text key={detail}>
                      {detail}
                    </Card.Text>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Appointment Banner */}
      <Container className="appointment-section">
        <Row className="appointment-banner align-items-center">
          <Col md={8}>
            <h3>Need a quick appointment?</h3>
            <p className="mb-md-0">
              Visit our booking page to request a consultation
              with your preferred doctor.
            </p>
          </Col>

          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Button
              href="/booking"
              className="appointment-button"
            >
              Book Appointment
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      {/* <footer className="medicare-footer">
        <Container fluid>
          <Row className="g-4">
            <Col md={4}>
              <h5>MediCare Hospital</h5>
              <p>
                Compassionate healthcare with experienced doctors,
                modern facilities, and patient-first service for
                every family.
              </p>
            </Col>

            <Col md={4}>
              <h5>Quick Links</h5>
              <Nav className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/booking">Booking</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Col>

            <Col md={4}>
              <h5>Contact</h5>
              <p>Email: support@medicare.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Location: Chennai, India</p>
            </Col>
          </Row>

          <div className="copyright text-center">
            © 2026 MediCare Hospital. All rights reserved.
          </div>
        </Container>
      </footer> */}

    </div>
  );
}

export default Contact;