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
			<table className="table">
			   <tbody>
			  	   {this.props.cmp.test.map(a => (
			  	   	 <tr className="tr" key={a.id}>
			           <td className="td" key={a.id}>{a.body}</td>
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
