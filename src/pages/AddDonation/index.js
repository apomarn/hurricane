import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Container = styled.div`
  margin: 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.p`
  font-size: 36px;
  font-weight: 700;
  text-items: center;
`

const SubTitle = styled.p`
  font-size: 20px;
  text-align: left;
  margin: 10px 0;
`

const Form = styled.form`
  border: 1px solid black;
  padding: 20px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-item: center;
`

const MyButton = styled(Button)`
  width: 50%;
  align-item: center;
`

const Video = styled.video``

class AddDonation extends Component {
  render() {
    return (
      <div>
        <video loop='true' autoplay='autoplay' controls='controls' muted>
          <source src='../images/hurricane1.mp4' type='video/mp4' width='100%' height='400px' />
        </video>
        <Container>
          <Header>Give us more information about your item</Header>
          <Form>
            <SubTitle>* Name of item:</SubTitle>
            <input type='textarea'></input>
            <SubTitle>* City:</SubTitle>
            <select>
              <option>Miami</option>
              <option>Boca Raton</option>
              <option>Fort Lauderdale</option>
            </select>
            <SubTitle>* Select label:</SubTitle>
            <select>
              <option>Furniture</option>
              <option>Clothes</option>
              <option>Other</option>
            </select>
            <SubTitle>* Description:</SubTitle>
            <textarea rows='4' cols='50'></textarea>
            <MyButton variant='primary'>Primary</MyButton>
          </Form>
        </Container>
      </div>
    )
  }
}

export default AddDonation
