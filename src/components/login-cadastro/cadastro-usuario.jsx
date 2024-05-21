import React, { useContext } from 'react';
import {Search} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { nomeFiscal } from '../scripts/inputs/NomeFiscalInput';


export default function CadastroUsuario() {
  const navigate = useNavigate();
  const trocarTelaLogin = () => navigate("/LoginUsuario")
  const trocarTelaPrincipal = () => navigate("/TelaPrincipal")

  const { inputValue, setInputValue } = useContext(nomeFiscal);

  return (
  <div className="font-Inter">
    <header className="h-[130px] bg-white drop-shadow-lg">
      <div className="flex justify-between items-center">
        <div className="pl-8 ">
          <img src="./assets/logo.png" alt="logo prefeitura" className="h-[130px]"></img>
        </div>
      </div>
    </header>

    <div className="bg-slate-300 w-full flex flex-col justify-center items-center pt-5 xm:h-[100vh] ">
      <div className="bg-white w-3/4 rounded-sm flex flex-col items-center">
        <h1 className="text-center text-xl pt-7 pb-5 font-bold">Cadastre-se na Secretaria da Educação</h1>

        <div className="grid grid-cols-2 gap-14 px-20 pb-10 xm:grid-cols-1 xm:gap-5 xm:px-5 ">
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Nome Completo</p>
            <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type='textarea' placeholder='Informe seu nome completo' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4 xm:w-64'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Matrícula</p>
            <input type='textarea' placeholder='Formato (000000-0)' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4 xm:w-full'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">E-mail</p>
            <input type='textarea' placeholder='Informe seu e-mail' className='w-96 text-[#878787] rounded-md border border-gray-500 py-3 pl-4 xm:w-full'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Telefone</p>
            <input type='textarea' placeholder='(00) 0 0000-0000' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4 xm:w-full'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Senha</p>
            <input type='textarea' placeholder='Informe uma senha' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4 xm:w-full'></input>
          </div>
          <div>
            <p className="text-[#074173] pl-4 pb-1 text-lg">Confirme sua senha</p>
            <input type='textarea' placeholder='Digite novamente sua senha' className='w-96 text-[#878787] rounded-md border border-gray-500 py-2 pl-4 xm:w-full'></input>
          </div>
        </div>
      </div>

      <div className="bg-white w-3/4 rounded-sm flex justify-between items-center drop-shadow-lg mb-5 px-[145px] pb-[44px] xm:px-[40px] xm:gap-5 xm:mb-0">
        <button 
        onClick={trocarTelaLogin}
        className="text-[#074173] text-lg hover:text-[#022c4f] ">
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