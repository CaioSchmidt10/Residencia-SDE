import React, {useState} from 'react';
import PrazoAditivo from './scripts/AditivoPrazo';
import QuantidadeAditivo from './scripts/AditivoQuantidade';
import PrazoQuantidade from './scripts/Prazo-e-Quantidade';
import FiscalCard from '../scripts/User';
import Sidebar from '../scripts/SideBar';


import {CircleUserRound, ChevronDown, StickyNote, Home, SquareUserRound, LogOut} from 'lucide-react';
import { Form, useNavigate } from 'react-router-dom';

export default function CaracteristicasAditivo() {
  
  const[selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) =>{setSelectedOption(event.target.value)};

  const navigate = useNavigate();
  const trocarTelaSair = () => navigate("/LoginUsuario")
  const trocarTelaVoltar = () => navigate("/CadastroAditivo")
  const trocarTelaSalvar = () => navigate("/TermoAditivo")
  const trocarTelaCancelar = () => navigate("/TermoAditivo")
  const trocarTelaInicio = () => navigate("/TelaPrincipal");

  return (
  <div className="font-Inter">
    <header className="h-[130px] bg-white drop-shadow-xl">
      <div className="flex justify-between items-center">
        <div className="pl-8">
          <img src="./assets/logo.png" alt="logo prefeitura" className="h-[130px]"></img>
        </div>

        <div className="flex flex-row gap-10 pr-16">
          <button className="flex flex-row gap-2 hover:bg-gray-400 rounded-md p-1">
            <CircleUserRound/>
            <p className="text-lg">Meus Dados</p>
          </button>
          <button 
            onClick={trocarTelaSair}
            className="flex flex-row gap-2 hover:bg-gray-400 rounded-md p-1">
            <LogOut />
            <p className="text-lg">Sair</p>
          </button>
        </div>
      </div>
    </header>

    <div className="flex">
      <div className="w-[330px] h-[100vh] bg-[#074173] text-white">
        <FiscalCard/>
        <div className="flex flex-col">
          <Sidebar/>
        </div>
      </div>

      <div className="flex-grow bg-slate-400 px-7 py-6">
        <h1 className="text-start font-bold text-4xl pb-4">Adicionar Termo Aditivo</h1>
        
        <div className="flex flex-col">
            <div className="flex flex-row justify-center">
                <button className=" bg-gray-300 border-black border border-b-0 rounded-tl drop-shadow-md px-[26px] py-2 focus:bg-[#E5E5E5]">
                    <p className="font-bold">Dados do aditivo</p>
                </button>
                <button className="bg-white border-black border border-l-0  border-b-0 rounded-tr drop-shadow-md px-[25px] py-2 ">
                    <p className="font-bold ">Características do aditivo</p>
                </button>
            </div>

            <div className="flex justify-center">
                <div className="bg-white w-[26.60rem] border border-black rounded-b-lg inline-block px-8 py-8">
                    <h1 className='text-xl text-center'>Escolha entre prazo e quantidade :</h1>
                    <div className="grid grid-cols-1 gap-5 pt-5">
                        <div>
                            <p className="font-bold ml-2">Prazo ou Quantidade? *</p>
                            <select id="opçõesAditivo" 
                            value={selectedOption} 
                            onChange={handleSelectChange} 
                            className="w-full py-2 px-2 text-lg rounded-lg border border-black">
                                <option value="">Selecione ...</option>
                                <option value="prazo">Prazo</option>
                                <option value="quantidade">Quantidade</option>
                                <option value="prazoQuantidade">Prazo e Quantidade</option>
                            </select>
                        </div>

                        {selectedOption === "prazo" && <PrazoAditivo/>}
                        {selectedOption === "quantidade" && <QuantidadeAditivo/>}
                        {selectedOption === "prazoQuantidade" && <PrazoQuantidade/>}
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex flex-row justify-center gap-5 pt-5">
            <button 
            onClick={trocarTelaVoltar}
            className=" bg-[#575757] hover:bg-[#6e6e6e] rounded-lg px-5 py-3">
                <p className="text-white">Voltar</p>
            </button>

            <button 
            onClick={trocarTelaCancelar}
            className=" bg-[#878787] hover:bg-[#6e6e6e] rounded-lg px-5 py-3">
                <p className="text-white">Cancelar</p>
            </button>

            <button 
            onClick={trocarTelaSalvar}
            className=" bg-[#074173] hover:bg-blue-900 rounded-lg px-5 py-3">
                <p className="text-white">Salvar</p>
            </button>
        </div>
      </div>
    </div>
  </div>
  );
}