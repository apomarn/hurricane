import React, { Component } from 'react'
import styled from 'styled-components'

class AddDonation extends Component {
  render() {
    return (
      <div>
        <p>Give us more information about your item</p>
        <form>
          <p>Name of item:</p>
          <input type='textarea'></input>
          <p>City:</p>
          <select>
            <option>Miami</option>
            <option>Boca Raton</option>
            <option>Fort Lauderdale</option>
          </select>
          <p>Select label:</p>
          <select>
            <option>Furniture</option>
            <option>Clothes</option>
            <option>Other</option>
          </select>
          <p>Description:</p>
          <textarea rows='4' cols='50'></textarea>
        </form>
      </div>
    )
  }
}

export default AddDonation
