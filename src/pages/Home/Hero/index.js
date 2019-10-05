import React, { Component } from 'react'

import styled from 'styled-components'

const Container = styled.div`
  background-image: url('../../images/hero.jpg');
  background-image: cover no-repeat;
  height: 360px;
  onject-fit: cover;
  width: 100%;
`
const Header = styled.div`
  font-size: 40px;
  color: white;
  text-align: center;
  padding-top: 100px;
`

class Hero extends Component {
  render() {
    return (
      <Container>
        <Header>
          Hurricane <br></br>
          <strong>Help</strong>
        </Header>
      </Container>
    )
  }
}

export default Hero
