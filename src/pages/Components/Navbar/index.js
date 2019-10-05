import React, { Component } from 'react'
import { Button, Nav, Form, FormControl, Navbar } from 'react-bootstrap'

class MyNavbar extends Component {
  render() {
    return (
      <>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/donate'>Donate</Nav.Link>
              <Nav.Link href='/request-help'>Request Help</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type='text' placeholder='Search' className='mr-sm-2' />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default MyNavbar
