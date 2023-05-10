import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Authors = () => {
  return (
    <Container style={{ marginTop: '5rem' }}>
      <Row className="justify-content-md-center align-items-center">
        <Col xs={12} md={6} className="text-center mb-5">
          <div style={{width: '8rem', height: '8rem', overflow: 'hidden', margin: '0 auto'}}>
            <Card.Img variant="top" src="../img/SIC.jpg" style={{maxWidth: '100%', height: 'auto', objectFit: 'cover'}}/>
          </div>
          <Card.Title style={{marginTop: '2rem', fontWeight: 'bold', fontSize: '1.5rem'}}>  Daniel Sebastian Rivas    Vargas </Card.Title>
        </Col>
        <Col xs={12} md={6} className="text-center mb-5">
          <div style={{width: '12rem', height: '9rem', overflow: 'hidden', margin: '0 auto'}}>
            <Card.Img variant="top" src="../img/uptc.png" style={{maxWidth: '100%', height: 'auto', objectFit: 'cover'}}/>
          </div>
          <Card.Title style={{marginTop: '1rem', fontWeight: 'bold', fontSize: '1.5rem'}}>Jony Alejandro Lopez Ballesteros</Card.Title>
        </Col>
      </Row>
    </Container>
  )
}

export default Authors;

