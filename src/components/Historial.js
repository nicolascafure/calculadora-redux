import React from 'react';
import{connect} from "react-redux"
const Historial = (props) => {

    const eliminarHistoria = id =>{
        props.dispatch({
            type: "DELETE_HISTORY", payload: id
        })
    }


    const agregarResultado= id =>{
props.dispatch({
            type: "ADD_RESULT", payload: id
        })

    }



    return ( <div className="contenedor-historial">
    {(props.historial.length===0)? <h1 className="titulo-historial">No hay nada en el historial</h1>: <h1 className="titulo-historial">Historial de operaciones</h1> }
     {
         props.historial.map(historia=><div key={historia.id} className="historia">
             <h3>Calculo</h3>
             <p> {historia.operacion}</p>
             <h3>Resultado</h3>
             <p>{historia.resultado}</p>
             <div className="contenedor-botones">
                 <button onClick={()=>eliminarHistoria(historia.id)}>Eliminar historia</button>
                 <button onClick={()=>agregarResultado(historia.id)} >Agregar resultado</button>
                  </div>
              </div>)
     }

 </div> );
}
function mapStateToProps(state){
    return{
historial: state.historial

        
    }
}
export default connect(mapStateToProps)(Historial);