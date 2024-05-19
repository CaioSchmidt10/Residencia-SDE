import {CircleUserRound, ChevronDown, StickyNote, Home, SquareUserRound, LogOut, Calendar} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DatasContrato from './scripts/DatasContrato';
import Sidebar from '../scripts/SideBar';

export default function CaracteristicasContrato() {

  const navigate = useNavigate();
  const trocarTelaSair = () => navigate("/LoginUsuario")
  const trocarTelaCancelar = () => navigate("/Contrato")
  const trocarTelaVoltar = () => navigate("/CadastroContrato")
  const trocarTelaSalvar = () => navigate("/Contrato")
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
      <div className="w-[420px] h-screen bg-blue-950 text-white">
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
          <button 
          onClick={trocarTelaInicio}
          className="px-4 py-3 w-full hover:bg-[#042F54] text-lg text-start flex flex-row gap-2">
            <Home />
            <p>Tela de início</p>
          </button>
          <Sidebar/>
        </div>
      </div>

      <div className="flex-grown bg-slate-400 px-7 py-5 w-full">
        <h1 className="text-start font-bold text-4xl pb-6">Adicionar Contrato</h1>
        <div className="flex flex-row">
          <button className=" bg-gray-300 border-black border border-b-0 rounded-tl drop-shadow-md px-4 py-2">
            <p className="font-bold">Dados do Contrato</p>
          </button>
          <button className="bg-white border-black border border-l-0  border-b-0 rounded-tr drop-shadow-md px-4 py-2 ">
            <p className="font-bold">Características do Contrato</p>
          </button>
        </div>
        <div className="bg-[#D9D9D9] rounded-b-lg border border-black px-10 py-4">
          <div className="grid grid-cols-3 gap-x-16 gap-y-2">

            <div className='space-y-5'>
              <div>
                <p className="font-bold text-sm ml-2">Especificação *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2 w-full"></input>
              </div>
              <div>
                <p className="font-bold text-sm ml-2">Quantidade *</p>
                <input type='textarea' placeholder="0,00" className="border border-slate-700 rounded px-5 py-2 w-full"></input>
              </div>
              <div>
                <p className="font-bold text-sm ml-2">Valor Unitário *</p>
                <div className="flex flex-row gap-2 justify-center items-center bg-white border border-slate-700 rounded pl-3 w-full">
                  <p>R$</p>
                  <input type='textarea' placeholder="0,00" className="border-l border-black w-full rounded-r-lg h-10 pl-2"></input>
                </div>
              </div>
              <div>
                <p className="font-bold text-sm ml-2">Valor Total *</p>
                <div className="flex flex-row gap-2 justify-center items-center bg-white border border-slate-700 rounded pl-3 w-full">
                  <p>R$</p>
                  <input type='textarea' placeholder="0,00" className="border-l border-black w-full rounded-r-lg h-10 pl-2"></input>
                </div>
              </div>
            </div>

            <div className='space-y-5'>
              <div>
                <p className="font-bold text-sm ml-2">Unidade de Medidas *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2 w-full"></input>
              </div>
              <div>
                <p className="font-bold text-sm ml-2">Indice de Reajuste *</p>
                <select className="border border-slate-700 rounded w-full px-3 py-2">
                  <option>IPCA</option>
                  <option>IGP-M</option>
                  <option>INPC</option>
                  <option>INCC</option>
                  <option>IGPDI</option>
                  <option>IPCA-E</option>
                  <option>IVAR</option>
                </select>
              </div>
              <div className='pt-[5px]'>
                <DatasContrato/>
              </div>
            </div>

            
            <div className='space-y-5'>
              <div>
                <p className="font-bold text-sm ml-2">Cadus *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2 w-full"></input>
              </div>
              <div>
              <p className="font-bold text-sm ml-2">Periodicidade de Pagamento *</p>
                <select className="border border-slate-700 rounded w-full px-3 py-2">
                  <option>Selecione ...</option>
                  <option>Mensal</option>
                  <option>Bimestral</option>
                  <option>Trimestral</option>
                  <option>Semestral</option>
                  <option>Anual</option>
                  <option>Por cronograma</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-row justify-end gap-5 pt-4">
          <button 
          onClick={trocarTelaVoltar}
          className="bg-gray-600 hover:bg-gray-800 text-white py-3 px-5 rounded-lg font-bold">
            Voltar
          </button>
          <button 
          onClick={trocarTelaCancelar}
          className="bg-[#878787] hover:bg-gray-600 text-white py-3 px-5 rounded-lg font-bold">
            Cancelar
          </button>
          <button 
          onClick={trocarTelaSalvar}
          className="bg-[#074173] hover:bg-blue-900 text-white py-3 px-5 rounded-lg font-bold">Salvar</button>
        </div>
      </div>
    </div>
  </div>
  );
}