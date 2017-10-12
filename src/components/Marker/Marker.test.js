import { shallow } from 'enzyme'
import React from 'react'

import Marker from './Marker'

it('renders without crashing', () => {
  global.google = {
    maps: {
      Marker: class {}
    }
  }
  const options = {
    context: {
      map: {}
    }
  }
  const props = {
    position: {
      lat: 0,
      lng: 0
    }
  }
  shallow(<Marker {...props} />, options)
})
