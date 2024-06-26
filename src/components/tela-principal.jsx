import {CircleUserRound, ChevronDown, StickyNote, Home, SquareUserRound, LogOut} from 'lucide-react';
import { useNavigate, useHistory} from 'react-router-dom';
import Sidebar from './scripts/SideBar';
import FiscalCard from './scripts/User';
import Atualizacao from './scripts/AtulizaçãoDataHora';

export default function TelaPrincipal() {

  

  const navigate = useNavigate();
  const trocarTelaSair = () => navigate("/LoginUsuario")
  const trocarTelaContrato = () => navigate("/Contrato")

  return (
  <div className="font-Inter">
    <header className="h-[130px] bg-white drop-shadow-lg">
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
      <div className=" w-[330px] h-[36.55rem] xl:h-screen bg-[#074173] text-white">
        <FiscalCard/>
        <div className="flex flex-col">
          <Sidebar/>
        </div>
      </div>
      <div className="bg-gray-300 px-3 py-7 flex-grow">
        <div className="flex justify-between">
          <h1 className="text-4xl">Início</h1>
          <Atualizacao/>
        </div>

        <div className="flex flex-row gap-3 xl:gap-10 py-10">
          <div className="bg-[#0095DC] rounded-lg drop-shadow-lg">
            <div className="grid grid-cols-2 gap-10 pt-5 h-[150px]">
              <div className="pl-3 text-white text-3xl w-[100px]">
                <p>Contratos Ativos</p>
              </div>
              <div className="w-[120px] text-white flex justify-center items-center">
                <h1 className="text-6xl">2</h1>
              </div>
            </div>
            <div className="bg-black bg-opacity-25 rounded-lg hover:bg-opacity-50 transition-all duration-500">
              <button 
              onClick={trocarTelaContrato}
              className="w-full text-white py-2 ">Ver Contratos</button>
            </div>
          </div>

          <div className="bg-[#D20016] rounded-lg drop-shadow-lg">
            <div className="grid grid-cols-2 gap-10 pt-5 h-[150px]">
              <div className="pl-3 text-white text-3xl w-[100px]">
                <p>Contratos Vencidos</p>
              </div>
              <div className="w-[120px] text-white flex justify-center items-center">
                <h1 className="text-6xl">5</h1>
              </div>
            </div>
            <div className="bg-black bg-opacity-25 rounded-lg hover:bg-opacity-50 transition-all duration-500">
              <button className="w-full text-white py-2">Ver Contratos</button>
            </div>
          </div>

          <div className="bg-[#7BC200] rounded-lg drop-shadow-lg">
            <div className="grid grid-cols-2 gap-10 pt-5 h-[150px]">
              <div className="pl-3 text-white text-3xl w-[100px]">
                <p>Contratos Atualizados</p>
              </div>
              <div className="w-[120px] text-white flex justify-center items-center">
                <h1 className="text-6xl">9</h1>
              </div>
            </div>
            <div className="bg-black bg-opacity-25 rounded-lg hover:bg-opacity-50 transition-all duration-500">
              <button className="w-full text-white py-2">Ver Contratos</button>
            </div>
          </div>

          <div className="bg-[#F8C600] rounded-lg drop-shadow-lg">
            <div className="grid grid-cols-2 gap-10 pt-5 h-[150px]">
              <div className="pl-3 text-white text-3xl w-[100px]">
                <p>Avisos e Notificações</p>
              </div>
              <div className="w-[120px] text-white flex justify-center items-center">
                <h1 className="text-6xl">5</h1>
              </div>
            </div>
            <div className="bg-black bg-opacity-25 rounded-lg hover:bg-opacity-50 transition-all duration-500">
              <button className="w-full text-white py-2">Ver Avisos e Notificações</button>
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>
    </div>
  </div>
  );
}