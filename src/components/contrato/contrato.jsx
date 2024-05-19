import {CircleUserRound, Search, CirclePlus, ChevronDown, StickyNote, Home, SquareUserRound, LogOut, Pen, Eye, Trash} from 'lucide-react';
import Sidebar from '../scripts/SideBar';
import { useNavigate } from 'react-router-dom';

export default function Contrato() {

  const navigate = useNavigate();
  const trocarTela = () => navigate("/CadastroContrato");
  const trocarTelaSair = () => navigate("/LoginUsuario")
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
      <div className="w-[29%] h-[36.55rem] bg-blue-950 text-white">
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

      <div className=" bg-slate-400 px-7 py-5 w-screen">
        <div className="flex flex-row gap-6">
          <h1 className="text-start font-bold text-4xl pb-4">Contratos</h1>
          <p className="text-[#575757] mt-[13px]">Exibidos 9 de 9 registros</p>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              onClick={trocarTela} 
              className="flex flex-row gap-3 bg-[#074173] text-white py-2 px-1 rounded">
              <CirclePlus strokeWidth={1.5} />
              <p>Adicionar Contrato</p>
            </button>
          </div>
          <div className="flex flex-row gap-3">
            <Search strokeWidth={1.5} />
            <input type='textarea' placeholder='Pesquisar...' className="rounded-lg mb-2 pl-3 border border-[#575757] text-[#575757]"></input>
          </div>
        </div>

        <div class="overflow-x-auto py-8">
          <table class="table-auto border-collapse border ">
            <thead className="bg-[#E5E5E5] border border-blue-500">
              <tr>
                <th class="border border-black px-6 py-2">N° do Contrato</th>
                <th class="border border-black px-12 py-2">Fornecedor</th>
                <th class="border border-black px-14 py-2">Fiscal</th>
                <th class="border border-black px-14 py-2">Objeto</th>
                <th class="border border-black px-4 py-2">Gerência</th>
                <th class="border border-black px-7 py-2">Vig. Início</th>
                <th class="border border-black px-7 py-2">VIg. Fim</th>
                <th class="border border-black px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td class="border px-4 py-2">0A0A0A0A0A0A</td>
                <td class="border px-4 py-2">Nome do Fornecedor</td>
                <td class="border px-4 py-2">Nome do fiscal</td>
                <td class="border px-4 py-2">Objeto</td>
                <td class="border px-4 py-2">Gerência</td>
                <td class="border px-4 py-2">dd/mm/aaaa</td>
                <td class="border px-4 py-2">dd/mm/aaaa</td>
                <td class="flex flex-row gap-1 px-1 py-2">
                  <button onClick={trocarTela} ><Pen size={20} strokeWidth={1.25} /></button>
                  <button><Eye strokeWidth={1.25} /></button>
                  <button><Trash strokeWidth={1.25} /></button>
                </td>
              </tr>
              <tr>
                <td class="border px-4 py-2">0A0A0A0A0A0A</td>
                <td class="border px-4 py-2">Nome do Fornecedor</td>
                <td class="border px-4 py-2">Nome do fiscal</td>
                <td class="border px-4 py-2">Objeto</td>
                <td class="border px-4 py-2">Gerência</td>
                <td class="border px-4 py-2">dd/mm/aaaa</td>
                <td class="border px-4 py-2">dd/mm/aaaa</td>
                <td class="flex flex-row border-t gap-1 px-1 py-2">
                  <button onClick={trocarTela}><Pen size={20} strokeWidth={1.25} /></button>
                  <button><Eye strokeWidth={1.25} /></button>
                  <button><Trash strokeWidth={1.25} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}