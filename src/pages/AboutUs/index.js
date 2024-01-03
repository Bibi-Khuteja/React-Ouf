import React from "react";
import "./index.scss";
import { Images } from "../../assets/images/images";
import Profile from "../profile/profile";
import { Container, Row, Col } from "react-bootstrap";


const About = () => {
  return (
    <div className="AboutUs my-5">
        <Container>
        <div className="sideText1">
            <h6 className="getstart">Getting Starting</h6>
            <h2 className="HowWorks">People talk about us</h2>
            <p className="marginExtra">
            We value great design because we know it will not only attract more potential users. 
            It can also bring you lots of attention for your product on social media
            </p>
        </div>
        <Row>
            <Col lg={4} md={6} sm={12} className=" my-5">
                <Profile/>
            </Col>
            <Col lg={4} md={6} sm={12} className="my-5">
            <Profile/>
            </Col>
            <Col lg={4} md={6} sm={12} className="my-5">
            <Profile/>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default About