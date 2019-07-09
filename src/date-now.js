import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================


 
class Empty extends React.Component {
  render() {
      return ( 
	      <p>today is the { "monday" }</p>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

// ========================================


ReactDOM.render(
  <Empty />,
  document.getElementById('root')
);


