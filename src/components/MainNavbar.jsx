import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MainNavbar() {
  return (
    <Navbar bg="warning" variant="light">
    <Container>
      <Navbar.Brand as={Link} to="/">Scene-It</Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link as={Link} className='fs-4 me-5' to="/">Home</Nav.Link>
        <Nav.Link as={Link} className='fs-4 me-5' to="/watchlist">Watchlist</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default MainNavbar