import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px 0;
`

class Cards extends Component {
  render() {
    return (
      <Container>
        <Link to='/donate'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='../images/donate.jpg' />
            <Card.Body>
              <Card.Title>Donate</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to='/request-help'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='../images/request-name.jpg' />
            <Card.Body>
              <Card.Title>Request Help</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    )
  }
}

export default Cards
