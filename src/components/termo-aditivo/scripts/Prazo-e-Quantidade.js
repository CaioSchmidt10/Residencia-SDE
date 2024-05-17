import React,{useState} from "react";

const DateInputWithValidation = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState('');

    const handleStartDateChange = (e) => {
        const selectedStartDate = e.target.value;
        setStartDate(selectedStartDate);
        validateDates(selectedStartDate, endDate);
    };

    const handleEndDateChange = (e) => {
        const selectedEndDate = e.target.value;
        setEndDate(selectedEndDate);
        validateDates(startDate, selectedEndDate);
    };

    const validateDates = (start, end) => {
        if (start && end && start >= end) {
        setError('A data de término deve ser posterior à data de início.');
        } else {
        setError('');
        }
    };
  
    return (
      <div className="flex flex-col gap-3">
          <div>
            <p className="font-bold text-sm ml-2">Data Vig.Inicial</p>
            <input
              placeholder="dd/mm/aaaa" 
              className="h-10 px-2 bg-white border border-slate-700 rounded-lg w-full"
              type="date"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              required
            />
          </div>
          <div>
            <p className="font-bold text-sm ml-2">Data Vig.Final</p>
            <input
              placeholder="dd/mm/aaaa" 
              className="h-10 px-2 bg-white border border-slate-700 rounded-lg w-full"
              type="date"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              required
            />
          </div>
          {error && <p className="text-sm text-center">{error}</p>}
      </div>
    );
  };

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

  function PrazoQuantidade(){
    return(
        <div className="flex flex-col gap-3">
            <DateInputWithValidation/>
            <PercentageInput/>
        </div>
    )
  }
  export default PrazoQuantidade;