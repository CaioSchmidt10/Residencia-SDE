import {CircleUserRound, Search, CirclePlus, ChevronDown, StickyNote, Home, SquareUserRound, LogOut, Pen, Eye, Trash} from 'lucide-react';
import Sidebar from '../scripts/SideBar';
import FiscalCard from '../scripts/User';
import TableContrato from './scripts/TabelaContratos';
import SearchBar from '../scripts/SearchBar';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

export default function Contrato() {

  const navigate = useNavigate();
  const trocarTela = () => navigate("/CadastroContrato");
  const trocarTelaSair = () => navigate("/LoginUsuario")

  const inputRef = useRef(null);

  const handleSearchClick = () => {
    inputRef.current.focus();
  };
  
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
      <div className="w-[29%] h-[36.55rem] xl:w-[22%] xl:h-[100vh] bg-[#074173] text-white">
        <FiscalCard/>
        <div className="flex flex-col">
          <Sidebar/>
        </div>
      </div>

      <div className=" bg-slate-400 px-7 py-5 w-screen">
        <div className="flex flex-row gap-6">
          <h1 className="text-start font-bold text-4xl pb-4">Contratos</h1>
          <p className="text-[#575757] mt-[13px]">Exibidos 9 de 9 registros</p>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              onClick={trocarTela} 
              className="flex flex-row gap-3 bg-[#074173] hover:hover:bg-[#042F54] text-white py-2 px-1 rounded">
              <CirclePlus strokeWidth={1.5} />
              <p>Adicionar Contrato</p>
            </button>
          </div>
          
          <SearchBar/>
        </div>

        <TableContrato/>
      </div>
    </div>
  </div>
  );
}