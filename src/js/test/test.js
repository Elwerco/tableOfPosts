import React, { Component } from 'react'
import jest from 'jest'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount () {
    test('zero', (p) => {
      axios.get('https://jsonplaceholder.typicode.com/comments')
	    .then(response => {
	      console.log(response.data)
	      this.setState({ user: response })
	    })
	    .catch(function (error) {
	      console.log(error)
	    })
      expect(this.state).not.toBeUndefined()
    }, 10000)
  }

  render () {
    return (
      <div />
    )
  }
}
