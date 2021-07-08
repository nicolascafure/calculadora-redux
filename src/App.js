import Screen from "./components/Screen";
import Result from "./components/Result";
import BtnName from "./components/BtnName";
import Reset from "./components/Reset";
import logo from "./logocalculator.gif";
import Menu from "./components/Menu";
import Historial from "./components/Historial";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const botones = [1,2,3,"+",4,5,6,"-",7,8,9,"/",0,".","*"]
  return (
  <>
    <Router>
    <Menu />
    <div className="flex-center">
      <div className="contenedor-principal">
        <Switch>
          <Route path="/historial">
            <Historial/>
          </Route>

          <Route path="/">
            <Screen />
            {botones.map(boton=><BtnName
              boton={boton}
              key={boton}
            />)}
            <Result />
        
            <div className="logo">
              <img src={logo}></img>
            </div>
            <Reset />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
</>
);
}

export default App;

