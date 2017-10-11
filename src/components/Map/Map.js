import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './Map.css'

class Map extends Component {
  render () {
    const { google } = window
    const { center, zoom } = this.props
    return (
      <div
        className='Map'
        ref={element => {
          if (element) {
            const options = {
              center,
              zoom
            }
            this.map = new google.maps.Map(
              element,
              options
            )
          }
        }}
      />
    )
  }
}

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  zoom: PropTypes.number.isRequired
}

export default Map
