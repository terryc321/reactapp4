import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================


 
class Empty extends React.Component {
  render() {
      return ( 
	  // this causes ERROR need enclosing tag like <div>... </div>
	      <p>this is paragraph one</p>
	      <p>this is paragraph two</p>
	       
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

// ========================================


ReactDOM.render(
  <Empty />,
  document.getElementById('root')
);


