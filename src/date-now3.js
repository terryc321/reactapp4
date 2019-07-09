import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================
 
class Empty extends React.Component {
    constructor(){
	// have to call super before anything else or error 
	super();
	this.a = "hello world";
	this.d = new Date(Date.now());
    }
    
  render() {
      return (
	  // jsx
	  // try to declare local variable in jsx 
	      <p>today is the { this.d.getDay() }</p>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

// ========================================


ReactDOM.render(
  <Empty />,
  document.getElementById('root')
);


