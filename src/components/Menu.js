import React from 'react';
import {Link} from "react-router-dom"

const Menu = () => {
    return (<> <div className="contenedor-nav"><div className="logo-top"><img src="https://rooftop.dev/images/rooftop-logo.webp" alt=""></img></div>
         <nav>      
         <Link to="/">Calculadora</Link>
         <Link to="/historial">Historial</Link>
            <a  target="_blank" href="https://rooftop.dev/" rel="noreferrer">Visita nuestra web</a>
       </nav></div>
       </>)
}
 
export default Menu;