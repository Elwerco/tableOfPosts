import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import store from '../store'
import PropTypes from 'prop-types'
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
      <div>
        <button onClick={this.pageStatus.bind(this)}>Click</button>
        <table className='table'>
          <tbody>
            {this.props.cmp.test.map(a => (
              <tr className='tr' key={a.id}>
                <td className='td' key={a.id}>{a.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img id='spiner' src='spiner.gif' />
      </div>
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
