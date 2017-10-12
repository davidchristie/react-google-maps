import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './Map.css'

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      map: null
    }
  }

  getChildContext () {
    return {
      map: this.state.map
    }
  }

  render () {
    const { google } = window
    const { center, children, zoom } = this.props
    const { map } = this.state
    return (
      <div
        className='Map'
        ref={element => {
          if (element && !map) {
            const options = {
              center,
              zoom
            }
            const map = new google.maps.Map(
              element,
              options
            )
            this.setState({
              map
            })
          }
        }}
      >
        {map ? children : null}
      </div>
    )
  }
}

Map.childContextTypes = {
  map: PropTypes.object
}

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  children: PropTypes.node,
  zoom: PropTypes.number.isRequired
}

export default Map
