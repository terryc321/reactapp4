import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================


 
class Empty extends React.Component {
    constructor(){
	// have to call super before anything else or error 
	super();
	
    }
    
  render() {
      return (
	 // jsx 
	      <p>today is the { Date.now() }</p>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

// ========================================


ReactDOM.render(
  <Empty />,
  document.getElementById('root')
);


