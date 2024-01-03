import React from 'react'
import "./index.scss";
import { Images } from "../../assets/images/images";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className='FooterSection py-4'>
        
    <Container>
        <Row>
            <Col lg={4} sm={12} md={4} className='my-5'>
                <div className='d-flex'>
                    <div>
                        <img src={Images.LocationIcon} 
                        alt="location icon"
                        width="24px"
                        height="24px"
                        />
                    </div>
                    <div>
                        <p className='location pl-3 pr-5'>Suite 477 8088 Keith Isle, 
                            Port Easterport, DE 83939</p>
                    </div>
                </div>
                <div className='d-flex my-3'>
                    <div>
                        <img src={Images.MailIcon} 
                        alt="location icon"
                        width="24px"
                        height="24px"
                        />
                    </div>
                    <div>
                        <p className='location pl-3 mb-0'>reyimo2443@gyxmz.com</p>
                    </div>
                </div>
                <div className='d-flex  my-3'>
                    <div>
                        <img src={Images.phnIcon} 
                        alt="location icon"
                        width="24px"
                        height="24px"
                        />
                    </div>
                    <div>
                        <p className='location pl-3 mb-0'>+15039645840</p>
                    </div>
                </div>
            </Col>
            <Col lg={8} sm={12} md={8} className='my-5'>
                <div className='folowDiv'>
                    <h3 className='followOn'>Follow Us</h3>
                    <div className='d-flex  footerIcon'>
                        <li className='listItems mx-3'>
                            <img src={Images.instaIcon}
                                alt="no icon"
                                width="40px"
                                height="40px"
                            />
                        </li>
                        <li className='listItems mx-3'>
                        <img src={Images.twitterIcon}
                                alt="no icon"
                                width="40px"
                                height="40px"
                            />
                        </li>
                        <li className='listItems mx-3'>
                        <img src={Images.linkedIcon}
                                alt="no icon"
                                width="40px"
                                height="40px"
                            />
                        </li>
                        <li className='listItems mx-3'>
                        <img src={Images.drippleIcon}
                                alt="no icon"
                                width="40px"
                                height="40px"
                            />
                        </li>
                    </div>
                </div>
            </Col>
        </Row>
        <div className='d-flex justify-content-center'>
                        <li className='listItems mx-3 location'>
                           <p>Privacy Policy</p>
                        </li>
                        <li className='listItems mx-3 location'>
                            <p>Terms & Conditions</p>
                        </li>
                        <li className='listItems mx-3 location'>
                            <p>Contact</p>
                        </li>
                        
                    </div>
    </Container>
    </div>
  )
}

export default Footer