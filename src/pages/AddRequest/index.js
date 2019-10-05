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

class AddRequest extends Component {
  render() {
    const eachItem = this.props.eachItem
    console.log(eachItem)

    return (
      <Container>
        <Header>Give us more information about your need</Header>
        <Form>
          <SubTitle>* Title:</SubTitle>
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
          <SubTitle>* Tell us your needs:</SubTitle>
          <textarea rows='4' cols='50'></textarea>
          <MyButton variant='primary'>Primary</MyButton>
        </Form>
      </Container>
    )
  }
}

export default AddRequest
