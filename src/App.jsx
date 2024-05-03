import {Search} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div>
    <header className="h-[150px] bg-white drop-shadow-lg">
      <div className="flex justify-between items-center">
        <div className="pl-8">
          <img src="./assets/logo.png" alt="logo prefeitura" className="h-[140px]"></img>
        </div>

        <div className="flex flex-row gap-10 pr-16">
          <div class="bg-gray-300 w-24 h-7"></div>
          <div class="bg-gray-300 w-24 h-7"></div>
          <div class="bg-gray-300 w-24 h-7"></div>
          <div class="bg-gray-300 w-24 h-7"></div>
          <div class="bg-gray-300 w-24 h-7"></div>
          <button>
          <Search />
          </button>
        </div>
      </div>
    </header>

    <div className="bg-slate-300 w-full flex justify-center items-center pt-10">
      <div className="bg-white w-3/4 rounded-sm flex flex-col items-center drop-shadow-lg mb-5">
        <h1 className="text-center text-xl pt-7 pb-5 font-bold">Cadastre-se na Secretaria da Educação</h1>

        <div className="grid grid-cols-2 gap-14 pl-20 pr-20 pb-10">
          <div>
            <p className="text-[#074173] pl-4 pb-1">Nome Completo</p>
            <input type='textarea' placeholder='Informe seu nome completo' className='w-96 text-[#878787] rounded-md border border-gray-300 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1">Matrícula</p>
            <input type='textarea' placeholder='Formato (000000-0)' className='w-96 text-[#878787] rounded-md border border-gray-300 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1">E-mail</p>
            <input type='textarea' placeholder='Informe seu e-mail' className='w-96 text-[#878787] rounded-md border border-gray-300 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1">Telefone</p>
            <input type='textarea' placeholder='(00) 0 0000-0000' className='w-96 text-[#878787] rounded-md border border-gray-300 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1">Senha</p>
            <input type='textarea' placeholder='Informe uma senha' className='w-96 text-[#878787] rounded-md border border-gray-300 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1">Confirme sua senha</p>
            <input type='textarea' placeholder='Digite novamente sua senha' className='w-96 text-[#878787] rounded-md border border-gray-300 py-2 pl-4'></input>
          </div>
        </div>

        <div className="flex justify-start">
          <button>
            Ja possui conta?
          </button>

          <button>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
