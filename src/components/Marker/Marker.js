import PropTypes from 'prop-types'
import { Component } from 'react'

class Marker extends Component {
  componentWillMount () {
    const { google } = window
    const { map } = this.context
    const { position } = this.props
    this.marker = new google.maps.Marker({
      position,
      map
    })
  }

  componentWillUnmount () {
    this.marker.setMap(null)
  }

  render () {
    return null
  }
}

Marker.contextTypes = {
  map: PropTypes.object.isRequired
}

Marker.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
}

export default Marker
