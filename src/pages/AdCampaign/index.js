import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { Images } from "../../assets/images/images";

const AdCampaingn = () => {
  return (
    <div className="whiteBG">
      <Container>
        <Row className="my-4">
          <Col lg={3} md={6} sm={12}>
            <img
              src={Images.Image1}
              alt="image1"
              width= "266px"
              height="106px"
              className="w-100"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img
              src={Images.Image2}
              alt="image1"
              width= "266px"
              height="106px"
              className="w-100 "
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img
              src={Images.Image3}
              alt="image1"
              width= "266px"
              height="106px"
              className="w-100"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img
              src={Images.Image4}
              alt="image1"
              width= "266px"
              height="106px"
              className="w-100 "
            />
          </Col>
        </Row>
     
      </Container>
    </div>
   
  );
};

export default AdCampaingn;
