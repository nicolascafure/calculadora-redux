import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import { Provider } from 'react-redux';

const initialState= {

  error: false,
  calculo:"",
  historial:[]
}


const store = createStore(function(state= initialState, action){
  switch(action.type){
    case "SEARCH_POST":
      return{...state,error :true}
case "SET_VALUE":
  return{...state, calculo: state.calculo + action.payload}

  case "FILTER_POST":
    let newPost = state.posts.filter(post=> post.title.includes(action.payload))
return{...state,filterPosts: newPost, searching:true}
}

  
  return state
})

ReactDOM.render(
  <React.StrictMode>
       <Provider store={store}> 
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
