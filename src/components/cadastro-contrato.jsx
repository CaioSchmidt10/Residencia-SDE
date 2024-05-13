import {CircleUserRound, ChevronDown, StickyNote, Home, SquareUserRound, LogOut} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CadastroContrato() {

  const navigate = useNavigate();
  const trocarTelaSair = () => navigate("/LoginUsuario")
  const trocarTelaCancelar = () => navigate("/Contrato")

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
      <div className="w-[330px] h-screen bg-blue-950 text-white">
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
          <button className="px-4 py-3 w-full hover:bg-[#042F54] text-lg text-start flex flex-row gap-2">
            <Home />
            <p>Tela de início</p>
          </button>
          <button className="px-4 py-3 w-full hover:bg-[#042F54] text-lg text-start flex flex-row gap-2">
            <StickyNote />
            <p>Gestão Contratual</p>
            <div className="ml-20">
              <ChevronDown />
            </div>
          </button>
          <button className="px-4 py-3 w-full hover:bg-[#042F54] text-lg text-start flex flex-row gap-2">
            <p>Lorem Ipsum</p>
          </button>
          <button className="px-4 py-3 w-full hover:bg-[#042F54] text-lg text-start flex flex-row gap-2">
            <p>Lorem Ipsum</p>
          </button>
        </div>
      </div>

      <div className="flex-grown bg-slate-400 px-7 py-5 w-full">
        <h1 className="text-start font-bold text-4xl pb-6">Adicionar Contrato</h1>
        <div className="flex flex-row">
          <button className=" bg-[#D9D9D9] border-black border border-b-0 rounded-tl drop-shadow-md px-4 py-2 focus:bg-[#E5E5E5]">
            <p className="font-bold">Dados do Contrato</p>
          </button>
          <button className="bg-[#D9D9D9] border-black border border-l-0  border-b-0 rounded-tr drop-shadow-md px-4 py-2 ">
            <p className="font-bold">Características do Contrato</p>
          </button>
        </div>
        <div className="bg-[#D9D9D9] rounded-b-lg border border-black px-10 py-4">
          <div className="flex flex-row justify-between ">
            <div className="grid grid-cols-2 gap-x-16 gap-y-2">
              <div>
                <p className="font-bold text-sm ml-2">Número do contrato *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">Código POA *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">Fornecedor *</p>
                <input type='textarea' className="border border-slate-700 rounded-lg px-5 py-2"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">CNPJ *</p>
                <input type='textarea' className="border border-slate-700 rounded-lg px-5 py-2"></input>
              </div>
              
              <div>
                <p className="font-bold text-sm ml-2">Responsável*</p>
                <input type='textarea' className="border border-slate-700 rounded-lg px-5 py-2"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">Razão Social *</p>
                <input type='textarea' className="border border-slate-700 rounded-lg px-5 py-2"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">E-mail do Responsável *</p>
                <input type='textarea' className="border border-slate-700 rounded-lg px-5 py-2"></input>
              </div>
              
              <div>
                <p className="font-bold text-sm ml-2">Telefone do Responsável *</p>
                <input type='textarea' className="border border-slate-700 rounded-lg px-5 py-2"></input>
              </div>
            </div>

            <div className="flex flex-col gap-x-16 gap-y-2">
              <div>
                <p className="font-bold text-sm ml-2">Gerência *</p>
                <select className="border border-slate-700 rounded w-full px-5 py-2">
                  <option>Gerência 01</option>
                  <option>Gerência 02</option>
                  <option>Gerência 03</option>
                </select>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">Nome do Fiscal *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">Matrícula do Fiscal *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2"></input>
              </div>

              <div>
                <p className="font-bold text-sm ml-2">E-mail do Fiscal *</p>
                <input type='textarea' className="border border-slate-700 rounded px-5 py-2"></input>
              </div>
              
            </div>
          </div>

          <div className="pt-2 flex justify-between">
            <div>
              <p className="font-bold text-sm ml-2">Objeto *</p>
              <input type='textarea' className="border border-slate-700 rounded-lg px-5 py-2 w-[500px]"></input>
            </div>

            <div>
              <p className="font-bold text-sm ml-2">Telefone do Fiscal *</p>
              <input type='textarea' className="border border-slate-700 rounded px-5 py-2"></input>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end gap-5 pt-4">
          <button 
          onClick={trocarTelaCancelar}
          className="bg-[#878787] hover:bg-gray-600 text-white py-3 px-5 rounded-lg font-bold">
            Cancelar
          </button>
          <button className="bg-[#074173] hover:bg-blue-900 text-white py-3 px-5 rounded-lg font-bold">Próximo</button>
        </div>
      </div>
    </div>
  </div>
  );
}