import {CircleUserRound, ChevronDown, StickyNote, Home, SquareUserRound, LogOut} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdicionarTermo() {

  const navigate = useNavigate();
  const trocarTelaSair = () => navigate("/LoginUsuario")
  const trocarTelaCancelar = () => navigate("/TermoAditivo")
  const trocarTelaProximo = () => navigate("/CadastroAditivo")
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
      <div className="w-[330px] h-[36.55rem] bg-blue-950 text-white">
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

      <div className="flex-grow bg-slate-400 px-7 py-6">
        <h1 className="text-start font-bold text-4xl pb-4">Adicionar Termo Aditivo/Supressão</h1>

        <div className="flex justify-center py-10">
            <div className="bg-white border border-black rounded-lg inline-block px-8 py-6">
                <h1 className='text-xl'>Escolha o tipo de termo para continuar :</h1>
                <div className="grid grid-cols-1 gap-1 pt-5">
                    <p className="font-bold ml-2">Tipo *</p>
                    <select className="w-full py-2 px-2 text-lg rounded-lg border border-black">
                        <option>Aditivo</option>
                        <option>Supressão</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div className="flex flex-row justify-center">
            <button 
            onClick={trocarTelaCancelar}
            className=" bg-[#878787] hover:bg-[#6e6e6e] rounded-lg px-5 py-3">
                <p className="text-white">Cancelar</p>
            </button>

            <button 
            onClick={trocarTelaCancelar}
            className=" bg-[#878787] hover:bg-[#6e6e6e] rounded-lg px-5 py-3">
                <p className="text-white">Cancelar</p>
            </button>
        </div>
      </div>
    </div>
  </div>
  );
}