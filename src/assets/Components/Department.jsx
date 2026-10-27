
import React from "react";
import "./Department.css";

function Departmentd() {
  const departments = [
    {
      id: 1,
      name: "Cardiology",
      description:
        "The Cardiology Department specializes in diagnosing and treating diseases related to the heart and blood vessels. It manages conditions such as heart attacks, hypertension, heart failure, and irregular heartbeats using advanced medical equipment."
    },
    {
      id: 2,
      name: "Neurology",
      description:
        "The Neurology Department deals with disorders of the brain, spinal cord, and nervous system. It treats conditions like stroke, epilepsy, Parkinson's disease, headaches, and nerve injuries."
    },
    {
      id: 3,
      name: "Orthopedics",
      description:
        "The Orthopedics Department focuses on the treatment of bones, joints, muscles, ligaments, and fractures. It provides care for injuries, arthritis, and bone deformities."
    },
    {
      id: 4,
      name: "Pediatrics",
      description:
        "The Pediatrics Department provides medical care for infants, children, and teenagers. It handles vaccinations, growth monitoring, childhood illnesses, and developmental disorders."
    },
    {
      id: 5,
      name: "Radiology",
      description:
        "The Radiology Department uses medical imaging technologies such as X-rays, CT scans, MRI scans, and ultrasound to diagnose diseases and injuries."
    },
    {
      id: 6,
      name: "Dermatology",
      description:
        "The Dermatology Department treats skin, hair, and nail conditions such as acne, infections, eczema, and skin diseases."
    },
    {
      id: 7,
      name: "ENT",
      description:
        "The ENT Department provides treatment for ear, nose, and throat problems, including hearing difficulties, sinus infections, and throat disorders."
    }
  ];

  return (
    <div className="departments-page">

      {/* Navbar */}
      

      {/* Department Heading */}
      <section className="dept-heading">
        <h2>Hospital Departments</h2>
        <p>
          Explore our medical departments and the services
          available for patients.
        </p>
      </section>

      {/* Department Cards */}
      <section className="dept-container">
        {departments.map((department) => (
          <div className="dept-card" key={department.id}>
            <h3>{department.name}</h3>
            <p>{department.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      {/* <footer className="dept-footer">
        <div>
          <h3>MediCare Hospital</h3>
          <p>
            Compassionate healthcare with experienced
            doctors, modern facilities, and patient-first
            care for every family.
          </p>
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
          <p>Email: support@medicare.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Chennai, India</p>
        </div>

        <p className="dept-copyright">
          © 2026 MediCare Hospital. All rights reserved.
        </p>
      </footer> */}

    </div>
  );
}

export default Departmentd;
