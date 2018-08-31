import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import store from '../store'
import PropTypes from 'prop-types'

class App extends Component {
  pageStatus () {
    var spiner = document.getElementById('spiner')
    spiner.style.display = 'block'
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        console.log(response.data)
        store.dispatch({ type: 'ADD_DATA', payload: response.data })
        spiner.style.display = 'none'
        console.log(this.props.cmp.test)
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
