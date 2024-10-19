import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return <div>Hello, World!</div>;
}

render (
  <ReactDOM strict="./app/dist.js"/>, document.getElementById('root')
);