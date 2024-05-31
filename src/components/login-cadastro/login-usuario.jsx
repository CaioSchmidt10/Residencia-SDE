import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

export default function LoginUsuario () {
  const navigate = useNavigate();

  const [emailMatricula, setEmailMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const trocarTelaCadastro = () => navigate("/");
  const trocarTelaPrincipal = () => {
    if (emailMatricula.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos antes de prosseguir.');
    } else {
      navigate("/TelaPrincipal");
    }
  };

  const handleEmailMatriculaChange = (event) => {
    setEmailMatricula(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  return (
  <div className="font-Inter">
    <header className="h-[130px] bg-white drop-shadow-lg">
      <div className="flex justify-between items-center">
        <div className="pl-8">
          <img src="./assets/logo.png" alt="logo prefeitura" className="h-[130px]"></img>
        </div>
      </div>
    </header>

    <div className="bg-slate-300 w-full h-full flex flex-row gap-20 justify-center items-center pt-10 pb-[73px] 
      xm:h-[85.50vh] md:h-[87.50vh] lg:h-[90.50vh]">

      <div className= "w-[25rem] h-[29.5rem] bg-white drop-shadow-lg px-5 flex flex-col xm:w-[20rem] xm:h-[31rem] md:w-[35rem] lg:w-[50rem] lg:h-[33rem]">
          <h1 className="text-center pt-7 text-xl pb-7 
          md:text-2xl lg:text-3xl">Indentifique-se na Secretaria de Educação</h1>
          <p className="text-[#074173] pl-8 text-lg 
          xm:pl-3 md:text-center md:font-bold md:pl-0 lg:text-center lg:pl-0 lg:text-xl lg:font-bold">E-mail ou Matricula</p>
          <div className="flex flex-wrap justify-center items-center pb-7">
            <input 
            onChange={handleEmailMatriculaChange}
            type='textarea' placeholder='Digite seu e-mail ou matricula' className='max-w-full w-80 text-[#878787] rounded-md border border-gray-500 py-3 pl-4
            md:text-xl lg:h-[5rem] lg:text-xl'></input>
          </div>
          <p className="text-[#074173] pl-8 text-lg 
          xm:pl-3 md:text-center md:font-bold md:pl-0 lg:text-center lg:pl-0 lg:text-xl lg:font-bold">Senha</p>
          <div className="flex flex-wrap justify-center items-center">
            <input 
            onChange={handleSenhaChange}
            type='password' placeholder='Digite sua senha' className='max-w-full w-80 text-[#878787] rounded-md border border-gray-500 py-3 pl-4
            md:text-xl lg:h-[5rem] lg:text-xl'></input>
          </div>
          <div className="flex flex-col content-center items-center justify-center gap-5">
            <button className="text-center pt-2 text-[#074173] hover:text-[#022c4f] text-sm 
            xm:font-bold md:text-base md:font-bold lg:text-xl lg:font-bold lg:pt-5">Esqueci minha senha</button>
            <button 
            onClick={trocarTelaPrincipal}
            className="flex flex-wrap items-center justify-center text-white text-lg bg-[#074173] hover:bg-[#022c4f] w-28 py-2 rounded-md
            lg:py-5 md:text-lg lg:text-xl lg:font-bold">
            Entrar</button>
          </div>
        <button 
        onClick={trocarTelaCadastro}
        className="text-start text-[#074173] hover:text-[#022c4f] text-sm pt-5 
        xm:text-center xm:font-bold md:text-lg lg:font-bold lg:text-xl">Não possui cadastro? Cadastre-se agora!</button>
      </div>
    </div>
  </div>
  );
}
