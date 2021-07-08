import React from 'react';
import {connect} from "react-redux"

const Result = (props) => {

    const getResult=()=>{
        try{
            props.dispatch({
                type: "ADD_HISTORY"
            })
         
            props.dispatch({
                type: "GET_RESULT"
            })
        }catch(err){
        if(err){
            if(err){props.dispatch({
                type: "RESET_VALUES"
            })
            props.dispatch({
                type: "SET_ERROR"
            })}
           
        }
        }
        }


    return (  
        <button className="result" onClick={getResult}>=</button>)
}
 
export default connect()(Result);