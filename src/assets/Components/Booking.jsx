import React, { useState } from "react";
import "./Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    doctor: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking submitted successfully!");

    console.log("Booking Details:", formData);

    setFormData({
      name: "",
      phone: "",
      email: "",
      doctor: "",
      date: ""
    });
  };

  return (
    <div className="booking-page">

      {/* Navbar */}
      {/* <nav className="booking-navbar">
        <h2>MediCare</h2>

        <div className="booking-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/booking">Booking</a>
          <a href="/doctors">Doctors</a>
          <a href="/departments">Departments</a>
          <a href="/contact">Contact Us</a>
        </div>
      </nav> */}

      {/* Booking Form */}
      <div className="booking-container">
        <h1>Book an Appointment</h1>

        <p>
          Fill in your details and choose a doctor to
          request an appointment.
        </p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Patient Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength="10"
            title="Enter a 10-digit phone number"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="doctor">Select Doctor</label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Choose a doctor</option>
            <option value="Dr. Arun">
              Dr. Arun - Cardiologist
            </option>
            <option value="Dr. Priya">
              Dr. Priya - Neurologist
            </option>
            <option value="Dr. Rahul">
              Dr. Rahul - Orthopedic
            </option>
            <option value="Dr. Meera">
              Dr. Meera - Pediatrician
            </option>
          </select>

          <label htmlFor="date">Booking Date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toLocaleDateString("en-CA")}
            required
          />

          <button type="submit">
            Submit Booking
          </button>

        </form>
      </div>

      {/* Footer */}
      {/* <footer className="booking-footer">
        <div>
          <h3>MediCare Hospital</h3>
          <p>Your health is our priority.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/booking">Booking</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: info@medicare.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Chennai, India</p>
        </div>

        <p className="copyright">
          © 2026 MediCare Hospital. All rights reserved.
        </p>
      </footer> */}

    </div>
  );
}

export default Booking;