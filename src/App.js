import React, { Component } from 'react'

import Map from './components/Map'
import Marker from './components/Marker'
import './App.css'
import logo from './logo.svg'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img alt='logo' className='App-logo' src={logo} />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Map
          center={{lat: -25.363, lng: 131.044}}
          zoom={4}
        >
          <Marker position={{lat: -25.363, lng: 131.044}} />
        </Map>
      </div>
    )
  }
}

export default App
