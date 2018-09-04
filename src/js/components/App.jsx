import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import store from '../store'
import PropTypes from 'prop-types'

import Table from './Table.jsx'

/**
  * Главный и единственный компонент
  * @constructor
  */
class App extends Component {
  /**
  * Получение данных, а также индикатор загрузки
  * @memberof App
  */
  pageStatus () {
    var spiner = document.getElementById('spiner')
    spiner.style.display = 'block'
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        store.dispatch({ type: 'ADD_DATA', payload: response.data })
        spiner.style.display = 'none'
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.pageStatus.bind(this)}>Click</button>
        <Table />
        <img id='spiner' src='spiner.gif' />
      </React.Fragment>
    )
  }
}

App.propTypes = {
  cmp: PropTypes.object.isRequired
}

export default connect(
  state => ({
    cmp: state
  })
)(App)
