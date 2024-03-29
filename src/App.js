import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Donate from './pages/Donate'
import Request from './pages/Request'
import Navbar from '../src/pages/Components/Navbar'
import AddDonation from './pages/AddDonation'
import AddRequest from './pages/AddRequest'

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/donate' component={Donate} />
      <Route exact path='/request-help' component={Request} />
      <Route exact path='/add-donation' component={AddDonation} />
      <Route exact path='/add-request' component={AddRequest} />
    </div>
  )
}

export default App
