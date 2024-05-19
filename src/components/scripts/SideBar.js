import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { ChevronDown, ChevronUp, StickyNote } from 'lucide-react';


const Sidebar = () => {
  const [showDivs, setShowDivs] = useState(false);

  const handleButtonClick = () => {
    setShowDivs(!showDivs);
  };

  const navigate = useNavigate();
  const trocarTelaContrato = ()=> navigate("/Contrato")
  const trocarTelaTermo = ()=> navigate("/TermoAditivo")

  return (
    <div>
        <button 
        onClick={handleButtonClick}
        className="px-4 py-3 w-full hover:bg-[#042F54] text-lg text-start flex flex-row gap-2">
            <StickyNote />
            <p>Gestão Contratual</p>
            <span className={`ml-20 transform transition-transform ${showDivs ? 'rotate-180' : ''}`}>
                <ChevronDown />
            </span>
        </button>
      {showDivs && (
        <div className="drop-shadow-lg border-t border-white">
          <button 
          onClick={trocarTelaContrato}
          className="px-4 py-3 w-full bg-blue-950 hover:bg-[#042F54] text-lg text-start">
            <p className="pl-9">Contratos</p>
          </button>
          <button 
          onClick={trocarTelaTermo}
          className="px-4 py-3 w-full bg-blue-950 hover:bg-[#042F54] text-lg text-start">
            <p className="pl-9">Termo Aditivo/Supressão</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;