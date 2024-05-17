import React from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import TelaPrincipal from "./components/tela-principal";
import CadastroUsuario from "./components/login-cadastro/cadastro-usuario";
import LoginUsuario from "./components/login-cadastro/login-usuario";
import Contrato from "./components/contrato/contrato";
import CadastroContrato from "./components/contrato/cadastro-contrato";
import CaracteristicasContrato from "./components/contrato/caracteristicas-contrato";
import TermoAditivo from "./components/termo-aditivo/termo-aditivo-supressao";
import AdicionarTermo from "./components/termo-aditivo/adicionar-termo-aditivo-supressao"
import CadastroAditivo from "./components/termo-aditivo/cadastro-aditivo";
import CadastroSupressao from "./components/termo-aditivo/cadastro-supressao";
import CaracteristicasAditivo from "./components/termo-aditivo/caracteristicas-aditivo";


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
        <Route exact path='/CaracteristicasContrato' element={<CaracteristicasContrato/>}/>
        <Route exact path='/TermoAditivo' element={<TermoAditivo/>}/>
        <Route exact path='/AdicionarTermo' element={<AdicionarTermo/>}/>
        <Route exact path='/CadastroAditivo' element={<CadastroAditivo/>}/>
        <Route exact path='/CadastroSupressao' element={<CadastroSupressao/>}/>
        <Route exact path='/CaracteristicasAditivo' element={<CaracteristicasAditivo/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
