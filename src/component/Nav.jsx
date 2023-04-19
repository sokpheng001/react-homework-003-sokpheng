import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


export default function Nav_() {
  return (   
    <>
      <Container className='me-10' >
        <Nav>
          <Nav.Item style={{marginTop:"10px"}}>
            <Nav.Link eventKey="link-1" style={{color:"black"}}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginTop:"10px"}}>
            <Nav.Link eventKey="link-2" style={{color:"black"}}>About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginTop:"10px"}}> 
            <Nav.Link eventKey="link-3" style={{color:"black"}}>
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  )
}

