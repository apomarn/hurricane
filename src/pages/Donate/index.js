import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin: 40px 100px;
`
const ModifyButton = styled(Button)`
  float: right;
  margin-bottom: 20px;
`
const Header = styled.p`
  font-size: 40px;
  color: black;
  font-weight: 700;
`

class Donate extends Component {
  render() {
    return (
      <Container>
        <Link to='/add-donation'>
          <ModifyButton variant='outline-primary'>Donate Here!</ModifyButton>
        </Link>
        <Header>Available Donations</Header>
      </Container>
    )
  }
}

export default Donate
