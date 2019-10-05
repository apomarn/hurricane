import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

import styled from 'styled-components'

// const Container = styled.div`
//   background-image: url('../../images/hero.jpg');
//   background-image: cover no-repeat;
//   height: 360px;
//   onject-fit: cover;
//   width: 100%;
// `
// const Header = styled.div`
//   font-size: 40px;
//   color: white;
//   text-align: center;
//   padding-top: 100px;
// `

class Hero extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src='../../images/hero.jpg' alt='First slide' height='500px' width='auto' />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='../../images/hero2.jpg' alt='Third slide' height='500px' width='auto' />

            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='../../images/hero3.jpg' alt='Third slide' height='500px' width='auto' />

            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}

export default Hero
