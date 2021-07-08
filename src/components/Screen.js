import React from 'react';
import {connect} from "react-redux"

const Screen = (props) => {
    return (<div className="screen">
    {props.error?<p className="errorP">Ingrese un valor correcto</p>:(props.calculo==="")?<p>0</p>:<p>{props.calculo}</p>}</div> );
}
function mapStateToProps(state){
    return{
    calculo: state.calculo,
    error: state.error,
}
}
 
export default connect(mapStateToProps)(Screen);