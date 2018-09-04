import React, { Fragment } from 'react'
import store from '../store'

import Td from './Td.jsx'

export default function Tr (props) {
  return (
    <tr className='tr' key={store.getState().test.id}>
      <Td />
    </tr>
  )
}
