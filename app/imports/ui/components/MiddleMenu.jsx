import React from 'react';
import { Button, Row, Col, Dropdown, } from 'react-bootstrap';

const MiddleMenu = () => (

  <Row className={"row justify-content-center pt-3"}>
    <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
      <strong>MEN</strong>
    </Dropdown.Toggle></Col>

    <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
      <strong>WOMEN</strong>
    </Dropdown.Toggle></Col>

    <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
      <strong>KIDS</strong>
    </Dropdown.Toggle></Col>

    <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
      <strong>BRANDS</strong>
    </Dropdown.Toggle></Col>

    <Col md={"auto"}><Button variant=""><strong>SEARCH</strong></Button>{' '}</Col>
  </Row>
);

export default MiddleMenu;

