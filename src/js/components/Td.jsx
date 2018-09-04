import React, { Fragment } from 'react'
import store from '../store'

export default function Td (props) {
  return (
    <React.Fragment>
      {store.getState().test.map(a => (
        <td className='td' key={a.id}>
          {a.body}
        </td>
      ))}
    </React.Fragment>
  )
}
