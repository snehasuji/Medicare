import React from "react";
import Card from "react-bootstrap/Card";
import doctor1 from "../doctor1.jpg"; 
import doctor2 from "../doctor2.jpg";
import "./doctor.css"
function Doctord() {
  return (
    <>
      <div className="doc">
        <h1>Our Doctors</h1>
        <p>
          Meet our specialists across departments and explore their areas of expertise.
        </p>
      </div>
<div className="part1">
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor1} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Rajesh Kumar</Card.Title>
          <Card.Text>
         <b>specialization:</b>Ear and Hearing specilist<br></br>
        <b>Department:</b>ENT
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor2} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Anjali</Card.Title>
          <Card.Text>
         <b>specialization:</b>Child health and vaccination Specialist<br></br>
        <b>Department:</b>pediatrics
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor1} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.manoj varma</Card.Title>
          <Card.Text>
         <b>specialization:</b>Dematologist<br></br>
        <b>Department:</b>Dematologist
          </Card.Text>
        </Card.Body>
      </Card>
      </div>


       <div className="par2">
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor2} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Meera joseph</Card.Title>
          <Card.Text>
         <b>specialization:</b>Cardiology<br></br>
        <b>Department:</b>Cardiology
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor1} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Hari varma</Card.Title>
          <Card.Text>
         <b>specialization:</b>Diagnostic imaging specialist<br></br>
        <b>Department:</b>Radiology
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor2} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Shalini</Card.Title>
          <Card.Text>
         <b>specialization:</b>Stroke and brain Disorder Specialist<br></br>
        <b>Department:</b>Neurology
          </Card.Text>
        </Card.Body>
      </Card>
      </div>


<div className="part3">
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor1} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Arun Das</Card.Title>
          <Card.Text>
         <b>specialization:</b>Dentist<br></br>
        <b>Department:</b>Dentist
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor2} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Neha Reddy</Card.Title>
          <Card.Text>
         <b>specialization:</b>Ear and Nose<br></br>
        <b>Department:</b>ENT
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={doctor1} alt="Doctor" />

        <Card.Body>
          <Card.Title>Dr.Anil kumar</Card.Title>
          <Card.Text>
         <b>specialization:</b>Cardiology<br></br>
        <b>Department:</b>Cardiology
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

    </>
  );
}

export default Doctord;