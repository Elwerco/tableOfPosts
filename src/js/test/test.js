import React from 'react'
import { shallow } from 'enzyme'
import Table from '../components/Table.jsx'
import Adapter from 'enzyme-adapter-react-16'

it('renders an editor area', () => {
  const editor = shallow(<Table />)
  expect(editor.find('table')).toBeTruthy()﻿
})
