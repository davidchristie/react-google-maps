import { shallow } from 'enzyme'
import React from 'react'

import Map from './Map'

it('renders without crashing', () => {
  const props = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0
  }
  shallow(<Map {...props} />)
})
