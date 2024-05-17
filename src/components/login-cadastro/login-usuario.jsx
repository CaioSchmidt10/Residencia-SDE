import {Search} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginUsuario () {
  const navigate = useNavigate();
  const trocarTelaCadastro = () => navigate("/")
  const trocarTelaPrincipal = () => navigate("/TelaPrincipal")

  return (
  <div className="font-Inter">
    <header className="h-[130px] bg-white drop-shadow-lg">
      <div className="flex justify-between items-center">
        <div className="pl-8">
          <img src="./assets/logo.png" alt="logo prefeitura" className="h-[130px]"></img>
        </div>
      </div>
    </header>

    <div className="bg-slate-300 w-full h-full flex flex-row gap-20 justify-center items-center pt-10 pb-[73px]">

      <div className= "w-[25rem] h-[29.5rem] bg-white drop-shadow-lg px-5 flex flex-col">
          <h1 className="text-center pt-7 text-xl pb-7">Indentifique-se na Secretaria de Educação</h1>
          <p className="text-[#074173] pl-8 text-lg">E-mail ou Matricula</p>
          <div className="flex flex-wrap justify-center items-center pb-7">
            <input type='textarea' placeholder='Digite seu e-mail ou matricula' className='max-w-full w-80 text-[#878787] rounded-md border border-gray-500 py-3 pl-4'></input>
          </div>
          <p className="text-[#074173] pl-8 text-lg">Senha</p>
          <div className="flex flex-wrap justify-center items-center">
            <input type='textarea' placeholder='Digite sua senha' className='max-w-full w-80 text-[#878787] rounded-md border border-gray-500 py-3 pl-4'></input>
          </div>
          <div className="flex flex-col content-center justify-center gap-5">
            <button className="text-center pt-2 text-[#074173] hover:text-[#022c4f] text-sm w-36 mx-28">Esqueci minha senha</button>
            <button 
            onClick={trocarTelaPrincipal}
            className="flex flex-wrap items-center justify-center text-white text-lg bg-[#074173] hover:bg-[#022c4f] w-28 mx-32 py-2 rounded-md">
            Entrar</button>
          </div>
        <button 
        onClick={trocarTelaCadastro}
        className="text-start text-[#074173] hover:text-[#022c4f] text-sm pt-5">Não possui cadastro? Cadastre-se agora!</button>
      </div>
    </div>
  </div>
  );
}
