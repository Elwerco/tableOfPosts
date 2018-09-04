import React, { Fragment } from 'react'
import store from '../store'

import Tr from './Tr.jsx'

export default function Td (props) {
  return (
    <React.Fragment>
      <table className='table'>
        <tbody>
          <Tr />
        </tbody>
      </table>
    </React.Fragment>
  )
}
