import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrintHello from './components/App';
import MyFunction from './components/Ex2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PrintHello />
    <MyFunction />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
