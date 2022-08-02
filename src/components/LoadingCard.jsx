import React from 'react'
import { Card, Button, Placeholder } from 'react-bootstrap'

function LoadingCard() {
  return (
    <Card className="border border-dark" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://place.dog/300/300" style={{ height: '25rem' }} />
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

export default LoadingCard