import React from "react";
import "./index.scss";
import { Images } from "../../assets/images/images";
import { Container, Row, Col } from "react-bootstrap";
import Features from "../Features/features";

const HowItWorks = () => {
  return (
    <>
      <div className="Works">
        <Row className="m-0">
          <Col lg={5}>
            <Container>
              <div className="circleDiv my-2">
                <div className="parent">
                  <img
                  alt="no img"
                    src={Images.circle}
                    width="110.974px"
                    height="120.05px"
                  />
                  <div className="child">
                    <h3 className="one">1</h3>
                  </div>
                </div>
                <h6 className="submitL ml-5 my-2">Submit Link</h6>
                <p className="submitP">
                  Upload a file or share a link to your design, whether it's a
                  Figma file or a live website
                </p>
              </div>
              <div className="circleDiv  my-2">
                <div className="parent">
                  <img
                    alt="no img"
                     src={Images.circle}
                    width="110.974px"
                    height="120.05px"
                  />
                  <div className="child">
                    <h3 className="one">2</h3>
                  </div>
                </div>
                <h6 className="submitL ml-5 my-2">Get Roasted</h6>
                <p className="submitP">
                  Within 72 hours, you'll receive senior-level feedback on how
                  to improve your design.
                </p>
              </div>
              <div className="circleDiv  my-2">
                <div className="parent">
                  <img
                    alt="no img"
                    src={Images.circle}
                    width="110.974px"
                    height="120.05px"
                  />
                  <div className="child">
                    <h3 className="one">3</h3>
                  </div>
                </div>
                <h6 className="submitL ml-5 my-2">Improve Design</h6>
                <p className="submitP">
                  Once your burn cools, take our feedback to heart and work on
                  improving your design.
                </p>
              </div>
            </Container>
          </Col>
          <Col lg={7} className="ColumnSec pr-0">
            <div className="sideText">
              <h6 className="getstart ">Getting Starting</h6>
              <h2 className="HowWorks  ">How it works</h2>
              <p className="submitP ">
                We believe in constructive criticism that fuels success
              </p>
            </div>
            <div className="marginT">
              <img src={Images.Image5} alt="no image" className="w-100" />
            </div>
          </Col>
        </Row>
      </div>
      {/* // working section ends here */}
      {/* // ===Get to know starts here ====== */}
      <div className="GetToKnow py-5">
        <Container>
          <div className="sideText1">
            <h6 className="getstart">Getting Starting</h6>
            <h2 className="HowWorks">Get to know our main Features</h2>
            <p className="marginExtra">
              iuyf ifu8fveru gferg9 guevug efvihf figuevrgireg ir guerg erg iuyf
              ifu8fveru gferg9 gueviuyf ifu8fveru
            </p>
          </div>

          {/* design 1 */}
          <Features/>
          {/* design 1 */}
          <Row className="py-5">
            <Col lg={4} md={4} sm={12}  className="align-self-center">
              <div className="text-center">
                <img src={Images.Image6} className="mb-5 circleBarCodeImg" alt="no Codebar" />
              </div>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <div className="sideText1 sideText2">
                <h3 className="Lorem ">Lorem</h3>
                <p className="mt-4 sidePara1  ">
                  iuyf ifu8fveru gferg9 guevug efvihf figuevrgireg ir guerg erg
                  iuyf ifu8fveru gferg9 gueviuyf ifu8fveru gferg9 gueviuyf
                  ifu8fveru gferg9 guev
                </p>
              </div>
            </Col>
          </Row>
          {/* design 3 */}
          <Features/>
        </Container>
      </div>

      {/* next section why form */}
      <div className="GetToKnow py-5">
        <Container>
          <div className="sideText1">
            <h6 className="getstart">Getting Starting</h6>
            <h2 className="HowWorks">Why Form?</h2>
            <p className="marginExtra">
              Lorem ipsum dolor sit amet consectetur. Commodo turpis orci
              <span className="spantext">integer tincidunt orci. Pulvinar viverra</span> malesuada in porttitor
              convallis scelerisque sed. Suscipit quis nibh proin lacinia est
              vel turpis. Nunc amet dolor nisi ut.
            </p>
          </div>
          <div className="parent text-right my-5">
            <img src={Images.Image8}
            alt="no img"
            className="parent-image"
            />
            <div className="child">
            <img src={Images.Image7}
            alt="no img"
            className="child-image"/>
          </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HowItWorks;
