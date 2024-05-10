import React from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import TelaPrincipal from "./components/tela-principal";
import CadastroUsuario from "./components/cadastro-usuario";
import LoginUsuario from "./components/login-usuario";
import Contrato from "./components/contrato";
import CadastroContrato from "./components/cadastro-contrato"


function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<CadastroUsuario/>}/>
        <Route exact path='/LoginUsuario' element={<LoginUsuario/>}/>
        <Route exact path='/TelaPrincipal' element={<TelaPrincipal/>}/>
        <Route exact path='/Contrato' element={<Contrato/>}/>
        <Route exact path='/CadastroContrato' element={<CadastroContrato/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
