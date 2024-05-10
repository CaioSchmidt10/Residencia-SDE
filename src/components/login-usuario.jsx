import {Search} from 'lucide-react';

export default function LoginUsuario() {

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

    <div className="bg-slate-300 flex justify-center items-center py-10">
      <div className="bg-white w-[40%] rounded-sm drop-shadow-lg">
        <h1 className="text-center text-2xl pt-7 pb-5 font-bold">Indentifique-se na Secretaria de Educação</h1>

        <div className="flex flex-col flex-wrap  content-center gap-10 px-14">
          <div>
            <p className="ml-2 text-[#074173] font-bold">E-mail ou Matrícula</p>
            <input type='textarea' placeholder='Digite seu e-mail ou matrícula' className="w-96 px-2 py-3 border border-black rounded"></input>
          </div>
          <div>
            <p className="ml-2 text-[#074173] font-bold">Senha</p>
            <input type='textarea' placeholder='Digite sua senha' className="w-96 px-2 py-3 border border-black rounded"></input>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center content-center gap-8 pt-5">
          <button className='text-[#074173] font-bold'>Esqueci minha senha</button>
          <button className="py-2  bg-[#074173] text-white rounded-lg ">Entrar</button>
        </div>

        <div className="flex justify-center text-center py-5">
          <button className="text-[#074173] font-bold">Não possui conta? Cadastre-se Agora!</button>
        </div>
      </div>
    </div>
  </div>
  );
}