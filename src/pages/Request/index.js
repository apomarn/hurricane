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
  flex-direction: column;
  padding: 20px;
`

class Request extends Component {
  render() {
    return (
      <div className='maincontainer'>
        <MainContainer>
          <Link to='/add-request'>
            <ModifyButton variant='outline-primary'>Request Help Here!</ModifyButton>
          </Link>
          <Header>Available Donations</Header>
          <Container>
            <p>
              <strong>Description: </strong>
            </p>
            <p>****</p>
            <p>
              <strong>Category: </strong>
            </p>
            <p>****</p>
            <p>
              <strong>Location: </strong>
            </p>
            <p>****</p>
          </Container>
        </MainContainer>
      </div>
    )
  }
}

export default Request
