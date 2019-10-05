import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainContainer = styled.div`
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

const Container = styled.div`
  border: 2px solid lightblue;
  box-shadow: 5px 5px lightgray;
  display: flex;
  width: 350px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`

const Description = styled.div`
  margin-left: 30px;
  margin-top: 30px;
`

class Donate extends Component {
  render() {
    return (
      <MainContainer>
        <Link to='/add-donation'>
          <ModifyButton variant='outline-primary'>Donate Here!</ModifyButton>
        </Link>
        <Header>Available Donations</Header>
        <Container>
          <Image src='../images/donate.jpg' />
          <Description>
            <p>
              <strong>Item: </strong>
            </p>
            <p>****</p>
            <p>
              <strong>Location: </strong>
            </p>
            <p>****</p>
          </Description>
        </Container>
      </MainContainer>
    )
  }
}

export default Donate
