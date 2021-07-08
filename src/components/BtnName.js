import React from 'react';
import { connect } from 'react-redux';

const BtnName = (props) => {
    let valorBoton
  
    if(props.boton==="-"||props.boton==="+"||props.boton==="*"||props.boton==="/"){
   valorBoton="operator"
    }else{
        valorBoton="number"
    }
   
       const inputNumber=()=>{
        props.dispatch({
            type:"SET_VALUE", payload: props.boton
          })
          console.log(props.calculo)
       }
    return ( <button className={valorBoton} onClick={inputNumber} >
        {props.boton}</button>
        );
}

function mapStateToProps(state){
    return{
calculo:state.calculo
     
    }
  }
 
export default connect(mapStateToProps)(BtnName);