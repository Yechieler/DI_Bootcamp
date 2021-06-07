import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import allReducer from './reducers';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// //1 NEED STORE " GLOBALIZED STATE"
// import {createStore} from 'redux';

// //2 ACTION "decribes what you want to do." 'INCREMENT'  "counter 0" action is a function that returns an object
// const increment = () =>{
//   return {
//     type:'INCREMENT'
//   }
// }
// const decrement = () =>{
//   return {
//     type:'DECREMENT'
//   }
// }

// //REDUCER
// const counter = (state = 0,action) =>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// //Display it in the console
// store.subscribe(()=> console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
