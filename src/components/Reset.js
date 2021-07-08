import React from 'react';
import {connect} from "react-redux"

const Reset = (props) => {
    const resetValues=()=>{
props.dispatch({
    type: "RESET_VALUES"
})
    }
    return (  <button className= "reset" onClick={resetValues}>Reset</button> );
}

export default connect()(Reset);