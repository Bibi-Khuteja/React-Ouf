// import { React, useState } from "react";
// import NavbarComponent from "../../components/NavbarComponent";
// import Footer from "../../components/FooterComponent";
// import AdCampaingn from "../AdCampaign";
// import HowItWorks from "../Working";
// import About from "../AboutUs";
// import Contact from "../ContactUs";
// import { Form, Button } from "react-bootstrap";
// import { Row, Col, Container } from "react-bootstrap";
// import "./index.scss";
// import { Images } from "../../assets/images/images";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// const HomePage = () => {
//   // declaring the variables
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [agreed, setAgreed] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!fullName.trim()) {
//       errors.fullName = "Full Name is required*";
//     }

//     if (!email.trim()) {
//       errors.email = "Email is required*";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Invalid email address";
//     }

//     if (!password.trim()) {
//       errors.password = "Password is required*";
//     } else if (password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }

//     if (!phone.trim()) {
//       errors.phone = "Phone number is required*";
//     }else if(phone.length < 10 && phone.length >10){
//       errors.phone = "number does not exists";
//     }

//     if (!agreed) {
//       errors.agreed = "Please agree to the terms*";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if there are no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isValid = validateForm();

//     if (isValid) {
//       // Perform form submission or further actions
//       console.log("Form submitted!");
//     } else {
//       console.log("Form has errors. Please check.");
//     }
//   };


//   return (
//     <>
//       {/* navbar component */}
//       <NavbarComponent />
//       {/* ==== hero section ====== */}
//       <div className="Banner-Section pb-3">
//         <Container>
//           <Row>
//             <Col sm={12} md={12} lg={8} className="side-content">
//               <div>
//                 <h1 className="banner-title">
//                   Your Next- LevelSaaS Website is only one click away
//                 </h1>
//               </div>
//               <div>
//                 <p className="bannaer-para p-2">
//                   The first ever design and development subscription for SaaS
//                   companies. Get highly detailed designs and modern frontend
//                   development without hiring an in-house team.
//                 </p>
//               </div>
//             </Col>
//             {/* ===== form column===== */}
//             <Col sm={12} md={12} lg={4}>
//               <p className="checkMe pb-0 ml-2 test-family">
//                 Get Started with your free trial
//               </p>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Full Name"
//                     className="input-placeholder"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                   />
//                   {formErrors.fullName && (
//                     <span className="error">{formErrors.fullName}</span>
//                   )}
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control
//                     type="text"
//                     placeholder="Email"
//                     className="input-placeholder"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   {formErrors.email && (
//                     <span className="error">{formErrors.email}</span>
//                   )}
//                 </Form.Group>

//                 <Form.Group
//                   className="mb-3 parent"
//                   controlId="formBasicPassword"
//                 >
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="input-placeholder"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   {formErrors.password && (
//                     <span className="error">{formErrors.password}</span>
//                   )}
//                   <div className="child" onClick={handleTogglePassword}>
//                     <FontAwesomeIcon
//                       icon={showPassword ? faEyeSlash : faEye}
//                       width="20"
//                       height="20"
//                       className="ml-auto eye-icon"
//                       alt="eye icon"
//                     />
//                   </div>
//                 </Form.Group>

//                 <div>
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Group className="mb-3" controlId="formBasicNumber">
//                         <Form.Control
//                           type="text"
//                           placeholder="+91"
//                           className="input-placeholder"
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Group className="mb-3" controlId="formBasicNumber">
//                         <Form.Control
//                           type="Phone"
//                           placeholder="Number"
//                           className="input-placeholder"
//                           value={phone}
//                           onChange={(e) => setPhone(e.target.value)}
//                         />
//                         {formErrors.email && (
//                           <span className="error">{formErrors.phone}</span>
//                         )}
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                 </div>
//                 <p className="checkMe mb-0">Get Started with your free trial</p>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                   <Form.Check
//                     className="checkMe"
//                     type="checkbox"
//                     label="Get Started with your free trial"
//                     style={{ borderColor: "blue" }}
//                     checked={agreed}
//                     onChange={(e) => setAgreed(e.target.checked)}
//                   />
//                   {/* <input type="checkbox" id="checkMe" class="form-check-input checkMe border border-primary" style={checkboxStyle}/>
//                     <label for="checkMe" class="form-check-label">Get Started with your free trial</label> */}
//                   {/* <input class="form-check-input border-primary" type="checkbox" value="" id="defaultCheck1"></input> */}
//                 </Form.Group>
//                 {formErrors.agreed && (
//                   <span className="error">{formErrors.agreed}</span>
//                 )}
//                 <Button
//                   className="w-100 start-getbtn p-3"
//                   onClick={handleSubmit}
//                 >
//                   Get Started
//                 </Button>
//               </Form>
//               <p className="orLogin mt-3">Or Login with</p>
          

//               <Row>
//                 <Col lg={6} md={6} sm={6} className="mb-2 ">
                 
//                   <Button className="d-flex align-items-center buttonSign w-100">
//                     <img
//                       src={Images.GoogleIcon}
//                       width="20px"
//                       height="20px"
//                       alt="facebook icon"
//                       className="facebookIcon"
//                     />
//                     <p className="signin mb-0 ml-2">Sign in with Google</p>
//                   </Button>
//                 </Col>
//                 <Col lg={6} md={6} sm={6} className="">
//                   {/* <div className="d-flex">
//                          <div>
//                          <img
//                           src={Images.facebookIcon}
//                           width="20px"
//                           height="20px"
//                           alt="google icon"
//                           className="googleIcon"/>
                          
//                          </div>
                         
//                          <p className="signin mb-0">Sign in with Facebook</p>
                         
//                      </div> */}
//                   <Button className="d-flex align-items-center buttonSign w-100 ">
//                     <img
//                       src={Images.facebookIcon}
//                       width="20px"
//                       height="20px"
//                       alt="facebook icon"
//                       className="facebookIcon"
//                     />
//                     <p className="signin mb-0 ml-2">Sign in with Facebook</p>
//                   </Button>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       {/* ==== Banner section ends here  */}
//       {/* Adcampaign section */}
//       <AdCampaingn />
//       <HowItWorks />
//       <About />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;


import React, { useState } from "react";
import NavbarComponent from "../../components/NavbarComponent";
import Footer from "../../components/FooterComponent";
import AdCampaingn from "../AdCampaign";
import HowItWorks from "../Working";
import About from "../AboutUs";
import Contact from "../ContactUs";
// import MainScreen from "../MainScreen";
// import RouterPages from "../RoutersMain";
import { Form, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import "./index.scss";
import { Images } from "../../assets/images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { GetPaths } from "../../NavigationPaths/navigations";




const HomePage = () => {
   const navigate = useNavigate();
  // const paths= GetPaths();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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

    if (!password.trim()) {
      errors.password = "Password is required*";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!phone.trim()) {
      errors.phone = "Phone number is required*";
    }else if (phone.length !== 10) {
      errors.phone = "Phone number should be 10 digits";
    }


    if (!agreed) {
      errors.agreed = "Please agree to the terms*";
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

      // if valid then navigate
      navigate(GetPaths.OnSuccess);

       // Reset form values
          setFullName("");
          setEmail("");
          setPassword("");
          setPhone("");
          setAgreed(false);
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
            [name]: !value.trim() ? 'Email is required*' : /\S+@\S+\.\S+/.test(value) ? '' :'Invalid email address',
          }));
          break;
      case "password":
        setPassword(value);
        break;
       
      case "phone":      
          setPhone(value);
        break;
    

      case "agreed":
        setAgreed(!agreed); 
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="Banner-Section pb-3">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={8} className="side-content">
            <div>
                <h1 className="banner-title">
                  Your Next- LevelSaaS Website is only one click away
                </h1>
              </div>
              <div>
                <p className="bannaer-para p-2">
                  The first ever design and development subscription for SaaS
                  companies. Get highly detailed designs and modern frontend
                  development without hiring an in-house team.
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={4}>
            <p className="checkMe pb-0 ml-2 test-family">
                Get Started with your free trial
               </p>
              <Form onSubmit={handleSubmit}>
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
                    <span className="error">{formErrors.fullName}</span>
                  )}
                </Form.Group>
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
                    <span className="error">{formErrors.email}</span>
                  )}
                </Form.Group>

                <Form.Group
                  className="mb-3 parent"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input-placeholder"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                  {formErrors.password && (
                    <span className="error">{formErrors.password}</span>
                  )}
                  <div className="child" onClick={handleTogglePassword}>
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      width="20"
                      height="20"
                      className="ml-auto eye-icon"
                      alt="eye icon"
                    />
                  </div>
                </Form.Group>

                <div>
                  <Row>
                    <Col sm={3}>
                      <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control
                          type="text"
                          placeholder="+91"
                          className="input-placeholder"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={9}>
                      <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Control
                            type="text"
                            placeholder="Number"
                            className="input-placeholder"
                            value={phone}
                            name="phone"
                            onChange={handleChange}
                          />
                        {formErrors.phone && (
                          <span className="error">{formErrors.phone}</span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <p className="checkMe mb-0">Get Started with your free trial</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    className="checkMe"
                    type="checkbox"
                    label="Get Started with your free trial"
                    style={{ borderColor: "blue" }}
                    name="agreed"
                    checked={agreed}
                    onChange={handleChange}
                  />
                  {/* <input type="checkbox" id="checkMe" class="form-check-input checkMe border border-primary" style={checkboxStyle}/>
                    <label for="checkMe" class="form-check-label">Get Started with your free trial</label> */}
                  {/* <input class="form-check-input border-primary" type="checkbox" value="" id="defaultCheck1"></input> */}
                </Form.Group>
                {formErrors.agreed && (
                  <span className="error">{formErrors.agreed}</span>
                )}

                <Button className="w-100 start-getbtn p-3" onClick={handleSubmit}>
                  Get Started
                </Button>
              </Form>

              <p className="orLogin mt-3">Or Login with</p>

              <Row>
                <Col lg={6} md={6} sm={6} className="mb-2">
                 
                  <Button className="d-flex align-items-center buttonSign w-100" type="submit">
                    <img
                      src={Images.GoogleIcon}
                      width="20px"
                      height="20px"
                      alt="google icon"
                      className="facebookIcon"
                    />
                    <p className="signin mb-0 ml-2">Sign in with Google</p>
                  </Button>
                 
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <Button className="d-flex align-items-center buttonSign w-100 " type="submit">
                    <img
                      src={Images.facebookIcon}
                      width="20px"
                      height="20px"
                      alt="facebook icon"
                      className="facebookIcon mr-1"
                    />
                    <p className="signin mb-0">Sign in with Facebook</p>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <AdCampaingn />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />

     

    
    </>
  );
};

export default HomePage;


