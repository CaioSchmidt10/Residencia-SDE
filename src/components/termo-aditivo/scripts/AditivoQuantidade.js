import React, {useState} from "react";

const PercentageInput = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
  
      if (/^\d{0,2}(\.\d{0,2})?%?$/.test(inputValue)) { 
        if (parseFloat(inputValue) <= 25 || inputValue === '') {
          setValue(inputValue);
          setError('');
        } else {
          setError('O valor máximo permitido é 25%.');
        }
      } else {
        setError('Por favor, insira uma porcentagem válida.');
      }
    };
  
    return (
      <div className="flex flex-col">
        <label className="font-bold text-sm ml-2">Porcentagem <span className="text-gray-500">(máx. 25%)</span></label>
        <input
          className="w-full rounded-lg h-10 px-2 bg-white border border-slate-700"
          type="text"
          id="percentage"
          value={value}
          onChange={handleInputChange}
          placeholder="Digite a porcentagem"
        />
        {error && <p className="text-center pt-2">{error}</p>}
      </div>
    );
  };

function QuantidadeAditivo(){
    return(
        <div className="flex flex-col gap-5">
            <div>
                <PercentageInput/>
            </div>
        </div>
    );
}

export default QuantidadeAditivo;