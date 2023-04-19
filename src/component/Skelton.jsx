import React from 'react'
import Card  from 'react-bootstrap/Card'
import  Placeholder  from 'react-bootstrap/Placeholder'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Skelton() {
  return (
    <Card style={{ width: '20rem' }}>
    {/* <Card.Img variant="top" src="" alt='Loding'/> */}
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>
  )
}
