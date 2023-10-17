import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const FooterMenu = () => (

  <footer>
    <Container>
      <Row className={"row py-3"}>
        <Col>
          NAVIGATION
          <hr/>

          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          MAIN MENU
          <hr/>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          CONNECT
          <hr/>
          <div>Sign up for the latest updates</div>
          <input type="text" placeholder="Enter Email Address"/>
          <div className="btn btn-dark">Join</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;

