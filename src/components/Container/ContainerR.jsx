import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';

const ContainerR = (props) => {
  return (
    <Container className="my-3">
      <Row >
        <Col className="text-center">
          <h1>{props.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="bg-light rounded p-3">
          <Container>
            <Row className="d-flex align-items-center">
              <Col xs={2} style={{ backgroundColor: 'white', width: '30px', height: '20px' }}></Col>
              <Form.Label column sm="5">{props.jugador2}</Form.Label>
              <Col xs={2} style={{ backgroundColor: 'black', width: '30px', height: '20px' }}></Col>
              <Form.Label column sm="5">{props.jugador1}</Form.Label>
            </Row>
            <Row className="d-flex align-items-center">
            <Col xs={1} style={{ backgroundColor: 'blue', width: '30px', height: '20px' }}></Col>
              <Form.Label column sm="5">Reina de fichas Blancas</Form.Label>
              <Col xs={2} style={{ backgroundColor: 'red', width: '30px', height: '20px' }}></Col>
              <Form.Label column sm="5">Reina de fichas Negras</Form.Label>
            </Row>

          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerR