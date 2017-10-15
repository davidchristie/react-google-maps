import React, { Component } from 'react'

import Map from './components/Map'
import Marker from './components/Marker'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>React Google Maps</h1>
        </header>
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
