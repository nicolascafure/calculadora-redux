import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import { Provider } from 'react-redux';
import { uuid } from 'uuidv4'

const initialState= {

  error: false,
  calculo:"",
  historial:[]
}


const store = createStore(function(state= initialState, action){
  switch(action.type){
    case "SET_ERROR":
      if(state.error){
        return{...state,error :false}
      }else{return{...state,error :true}}
      
     case "RESET_VALUES":
       return{...state,calculo:"",error:false}

case "SET_VALUE":
  return{...state, calculo: state.calculo + action.payload}

  case "GET_RESULT":
    if(state.calculo===""){
      return{...state, calculo: 0}
    }else{return{...state,calculo: eval(state.calculo)}}

  case "ADD_HISTORY":
    const nuevaHistoria={
      operacion: state.calculo,
      resultado: eval(state.calculo),
      id: uuid()
    }
    if(state.calculo ===0 || state.calculo ===""){
      return
    }else{
      return{...state,historial: [...state.historial,nuevaHistoria],error:false}
    }

    case "DELETE_HISTORY":
      const nuevoHistorial= state.historial.filter(historia=> historia.id !== action.payload)
      return{...state,historial:nuevoHistorial}

      case "ADD_RESULT":
        const nuevoResultado= state.historial.filter(historia=>historia.id === action.payload)
        return{...state,calculo:state.calculo + nuevoResultado[0].resultado}

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
