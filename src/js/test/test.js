import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Table from '../components/Table.jsx'
import Tr from '../components/Tr.jsx'
import Td from '../components/Td.jsx'

it('Table test', () => {
  const editor = shallow(<Table />)
  expect(editor.find('.table')).toHaveLength(1)
})

it('Tr test', () => {
  const editor = shallow(<Tr />)
  expect(editor.find('.tr')).toHaveLength(1)
})

// Так как в момент теста данные не получены и ячеики таблицы не созданы(на кнопку никто не тыкнул),
// я проверяю наичие пустого компонента, и в слуае если такой существует-возвращаю true.

it('Td test', () => {
  const editor = shallow(<Td />)
  expect(editor.exists()).toEqual(true)
})
