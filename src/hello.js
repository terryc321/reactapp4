import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================


class Hello extends React.Component {
  render() {
      return (
	  <a>Hello world</a>
    );
  }
}

// ========================================


ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);


