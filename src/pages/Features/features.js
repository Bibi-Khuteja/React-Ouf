import React from 'react'
import { Row,Col } from 'react-bootstrap'
import './index.scss'
import { Images } from '../../assets/images/images'

const Features = () => {
  return (
    <div>
        <Row className="py-5">
            <Col lg={8} md={8} sm={12}>
              <div className="sideText1">
                <h3 className="Lorem">Lorem</h3>
                <p className="my-4 sidePara ">
                  iuyf ifu8fveru gferg9 guevug efvihf figuevrgireg ir guerg erg
                  iuyf ifu8fveru gferg9 gueviuyf ifu8fveru gferg9 gueviuyf
                  ifu8fveru gferg9 guev
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}  className="align-self-center">
              <div className='text-center' >
                <img src={Images.Image6} className="circleBarCodeImg " alt="no img"/>
              </div>
            </Col>
          </Row>
    </div>
  )
}

export default Features