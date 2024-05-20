import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { ChevronDown, Home, StickyNote, ReceiptText, PencilLine } from 'lucide-react';
const BarraLateral = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [showDivs, setShowDivs] = useState(false);
  

  
  const handleButtonClick = () => {
    setShowDivs(!showDivs);
    setIsClicked(!isClicked);
  }

  const navigate = useNavigate();
  const trocarTelaInicio = () => navigate("/TelaPrincipal")
  const trocarTelaContrato = ()=> navigate("/Contrato")
  const trocarTelaTermo = ()=> navigate("/TermoAditivo")

  return (
    <div>
        <button 
          onClick={trocarTelaInicio}
          className="px-4 py-3 w-full hover:bg-[#042F54] hover:bg-opacity-70 text-lg text-start flex flex-row gap-2 transition-all duration-500">
            <Home />
            <p>Tela de início</p>
        </button>
        <button 
        onClick={handleButtonClick}
        className={`px-4 py-3 w-full ${isClicked ? 'bg-[#042F54]' : 'bg-[#074173]'} hover:bg-[#042F54] drop-shadow-lg text-lg text-start flex flex-row gap-2 transition-all duration-500`}>
            <StickyNote />
            <p>Gestão Contratual</p>
            <span className={`ml-20 transform transition-transform duration-200 ${showDivs ? 'rotate-180' : ''}`}>
                <ChevronDown />
            </span>
        </button>
       {showDivs && (
        <div className={`transition-all duration-500 transform`}>
          <button 
          onClick={trocarTelaContrato}
          className="px-4 py-3 w-full bg-[#042F54] hover:bg-opacity-70 text-lg text-start flex flex-row gap-2 transition-all duration-300">
            <ReceiptText />
            <p className="">Contratos</p>
          </button>
          <button 
          onClick={trocarTelaTermo}
          className="px-4 py-3 w-full bg-[#042F54] hover:bg-opacity-70 text-lg text-start flex flex-row gap-2 drop-shadow-xl transition-all duration-300">
            <PencilLine />
            <p className="">Termo Aditivo/Supressão</p>
          </button>
        </div>
        
        
        
      )}
      <button 
          className="px-4 py-3 w-full hover:bg-[#042F54] hover:bg-opacity-70 text-lg text-start flex flex-row gap-2 transition-all duration-500">
            <p>Lore Ipsum</p>
      </button>

      <button 
          className="px-4 py-3 w-full hover:bg-[#042F54] hover:bg-opacity-70 text-lg text-start flex flex-row gap-2 transition-all duration-500">
            <p>Lore Ipsum</p>
      </button>

    </div>
  );
};

export default BarraLateral;