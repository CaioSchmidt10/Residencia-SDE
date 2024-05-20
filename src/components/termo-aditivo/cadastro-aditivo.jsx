import {CircleUserRound, ChevronDown, StickyNote, Home, SquareUserRound, LogOut} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../scripts/SideBar';

export default function CadastroAditivo() {

  const navigate = useNavigate();
  const trocarTelaSair = () => navigate("/LoginUsuario")
  const trocarTelaCancelar = () => navigate("/AdicionarTermo")
  const trocarTelaProximo = () => navigate("/CaracteristicasAditivo")
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
      <div className="w-[420px] h-[36.55rem] bg-[#074173] text-white">
        <div className="flex flex-row gap-3 px-5 py-3 drop-shadow-lg">
          <button>
            <SquareUserRound  size={80}/>
          </button>
          <div>
            <button className='text-lg mt-4 hover:bg-gray-400 rounded hover:text-slate-600'>
              Nome do Fiscal
            </button>
            <p>Matricula: 000000</p>
          </div>
        </div>
        <div className="flex flex-col">
          <Sidebar/>
        </div>
      </div>

      <div className="flex-grown bg-slate-400 px-7 py-4 w-full">
        <h1 className="text-start font-bold text-4xl pb-4">Adicionar Termo Aditivo</h1>
        <div className="flex flex-row">
          <button className=" bg-white border-black border border-b-0 rounded-tl drop-shadow-md px-7 py-2 focus:bg-[#E5E5E5]">
            <p className="font-bold text-lg">Dados do aditivo</p>
          </button>
          <button className="bg-gray-300 border-black border border-l-0  border-b-0 rounded-tr drop-shadow-md px-7 py-2 ">
            <p className="font-bold">Características do aditivo</p>
          </button>
        </div>
        <div className="flex flex-row gap-24 bg-white rounded-b-lg border border-black px-10 py-4 w-full">
          <div className="flex flex-col py-3">
            <div className="flex flex-row gap-10">
              <div>
                <p className="font-bold text-sm ml-2">Setor *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2 w-full"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">Nº do SEI **</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2"></input>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <p>Comentário *</p>
              <textarea className="w-full border border-black rounded-lg pl-1"></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-7 py-4">
            <div className="">
              <p className="font-bold text-sm mb-1">Anuência do Fornecedor *</p>
              <input type='file'></input>
            </div>

            <div className="">
              <p className="font-bold text-sm mb-1">Carta Fiança *</p>
              <input type='file'></input>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-5 pt-4 ">
          <button 
          onClick={trocarTelaCancelar}
          className="bg-[#878787] hover:bg-gray-600 text-white py-3 px-5 rounded-lg font-bold">
            Cancelar
          </button>
          <button 
          onClick={trocarTelaProximo}
          className="bg-[#074173] hover:bg-blue-900 text-white py-3 px-5 rounded-lg font-bold">Próximo</button>
        </div>
      </div>
    </div>
  </div>
  );
}