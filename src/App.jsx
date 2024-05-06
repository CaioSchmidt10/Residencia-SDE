import './App.css';
import {CircleUserRound} from 'lucide-react';
import {LogOut} from 'lucide-react';
import {SquareUserRound} from 'lucide-react';

function App() {

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
          <button className="flex flex-row gap-2 hover:bg-gray-400 rounded-md p-1">
            <LogOut />
            <p className="text-lg">Sair</p>
          </button>
        </div>
      </div>
    </header>

    <div className="grid grid-cols-2">
      <div className="col-span-1 w-[330px] bg-[#10439F] text-white">
        <div className="flex flex-row gap-3 px-5 py-3">
          <button>
            <SquareUserRound  size={80}/>
          </button>
          <div>
            <button className='text-lg pt-4'>
              Nome do Fiscal
            </button>
            <p>Matricula: 000000</p>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="px-4 py-3 w-full hover:bg-[#042F54] text-start">
            Tela de início
          </button>
        </div>
      </div>

      <div className="col-span-1">

      </div>
    </div>
  </div>
  );
}

export default App;