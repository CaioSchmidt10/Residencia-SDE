import {CircleUserRound} from 'lucide-react';
import {LogOut} from 'lucide-react';
import {SquareUserRound} from 'lucide-react';
import {Home} from 'lucide-react';
import {StickyNote} from 'lucide-react';
import {ChevronDown} from 'lucide-react';
import {CirclePlus} from 'lucide-react';
import {Search} from 'lucide-react';

export default function Contrato() {

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
          <button className="flex flex-row gap-2 hover:bg-gray-400 rounded-md p-1">
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
        <div className="flex flex-row gap-6">
          <h1 className="text-start font-bold text-4xl pb-4">Contratos</h1>
          <p className="text-[#575757] mt-[13px]">Exibidos 9 de 9 registros</p>
        </div>
        <div className="flex justify-between">
          <div>
            <button className="flex flex-row gap-3 bg-[#074173] text-white py-2 px-1 rounded">
              <CirclePlus strokeWidth={1.5} />
              <p>Adicionar Contrato</p>
            </button>
          </div>
          <div className="flex flex-row gap-3">
            <Search strokeWidth={1.5} />
            <input type='textarea' placeholder='Pesquisar'></input>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}