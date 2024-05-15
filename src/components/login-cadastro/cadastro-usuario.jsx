import {Search} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CadastroUsuario() {
  const navigate = useNavigate();
  const trocarTelaLogin = () => navigate("/LoginUsuario")
  const trocarTelaPrincipal = () => navigate("/TelaPrincipal")

  return (
  <div className="font-Inter">
    <header className="h-[130px] bg-white drop-shadow-lg">
      <div className="flex justify-between items-center">
        <div className="pl-8">
          <img src="./assets/logo.png" alt="logo prefeitura" className="h-[130px]"></img>
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

    <div className="bg-slate-300 w-full flex flex-col justify-center items-center pt-5">
      <div className="bg-white w-3/4 rounded-sm flex flex-col items-center">
        <h1 className="text-center text-xl pt-7 pb-5 font-bold">Cadastre-se na Secretaria da Educação</h1>

        <div className="grid grid-cols-2 gap-14 pl-20 pr-20 pb-10">
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Nome Completo</p>
            <input type='textarea' placeholder='Informe seu nome completo' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Matrícula</p>
            <input type='textarea' placeholder='Formato (000000-0)' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">E-mail</p>
            <input type='textarea' placeholder='Informe seu e-mail' className='w-96 text-[#878787] rounded-md border border-gray-500 py-3 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Telefone</p>
            <input type='textarea' placeholder='(00) 0 0000-0000' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Senha</p>
            <input type='textarea' placeholder='Informe uma senha' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Confirme sua senha</p>
            <input type='textarea' placeholder='Digite novamente sua senha' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4'></input>
          </div>
        </div>
      </div>

      <div className="bg-white w-3/4 rounded-sm flex justify-between items-center drop-shadow-lg mb-5 px-20 pb-[44px]">
        <button 
        onClick={trocarTelaLogin}
        className="text-[#074173] text-lg hover:text-[#022c4f]">
          Já possui conta?
        </button>

        <button 
        onClick={trocarTelaPrincipal}
        className="bg-[#074173] text-white px-5 py-2 rounded text-lg hover:bg-[#022c4f]">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
  );
}