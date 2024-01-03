import React, { useState } from 'react'
import "./index.scss";
import { Container, Row, Col,Form,Button } from "react-bootstrap";

const Contact = () => {
  const [message,setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required*";
    }

    if (!email.trim()) {
      errors.email = "Email is required*";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if(!message.trim()){
      errors.message = "message is reqired*";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Perform form submission or further actions
      console.log("Form submitted!");

       // Reset form values
          setFullName("");
          setEmail("");
          setMessage("");
    } else {
      console.log("Form has errors. Please check.");
    }
  };

  // this function to clear the error while typing

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for the corresponding field
    }));

    switch (name) {
      case "fullName":
        setFullName(value);
        break;

        case 'email':
          setEmail(value);
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !value.trim() ? 'Email is required*' : /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address',
          }));
          break;
          case 'message':
            setMessage(value);
          break;
      default:
        break;
    }
  };

  return (
    <div className='contact py-5'>
        <Container>
        <div className='text-center'>
            <h2 className='contact-title'>Contact Us</h2>
            <div className='text-center main'>
            <p className='contact-para'>Lorem ipsum dolor sit amet consectetur. Commodo turpis orci 
            <span className='contact-para span-text'>integer tincidunt orci. 
                Pulvinar viverra</span> </p>
            </div>

       </div>
      
       <div className=''>
  <div className="d-flex justify-content-center ">
    <Form className='w-75' onSubmit={handleSubmit}>
      <Row>
        <Col lg={6} md={12} sm={12}>
        <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    className="input-placeholder"
                    name="fullName"
                    value={fullName}
                    onChange={handleChange}
                  />
                  {formErrors.fullName && (
                    <span className="error text-right">{formErrors.fullName}</span>
                  )}
                </Form.Group>
             
        </Col>
        <Col lg={6} md={12} sm={12}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    className="input-placeholder"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <span className="error text-right">{formErrors.email}</span>
                  )}
                </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Control as="textarea" rows={5} 
        placeholder="Message" 
        className="input-placeholder"
        name='message'
        value={message}
        onChange={handleChange}  />
          {formErrors.message && (
                    <span className="error text-right">{formErrors.message}</span>
                  )}
      </Form.Group>
      <Button className="start-getbtn py-2  px-5" onClick={handleSubmit}>
      Submit
      </Button>
    </Form>
  </div>
</div>

       

        </Container>
       
    </div>
  )
}

export default Contact