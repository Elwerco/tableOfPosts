import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store';

class App extends Component {
	componentWillMount(){

		axios.get('https://jsonplaceholder.typicode.com/comments')
	    .then(response => {
	      console.log(response.data);
	      store.dispatch({ type: 'ADD_DATA', payload: response.data });
	      console.log(this.props.cmp.test)
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
	}

	fun() {
		var obj = this.props.cmp.test.map(a => {return a.body});
    	console.log(obj);
	}

    render() { 
      return(
        <div>
        	<button onClick={this.fun.bind(this)}>Click</button>
			<table>
			   <tbody key={1}>
			       <tr>
			           <td>sds</td>
			       </tr>
			  	   {this.props.cmp.test.map(a => (
			  	   	 <tr>
			           <td>{a.body}</td>
			        </tr>
			  	   	))}
			   </tbody>
			</table>
        </div>
        );
    }
}

export default connect(
  state => ({
    cmp: state
  })
)(App);
