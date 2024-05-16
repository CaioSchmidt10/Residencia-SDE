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
      <div className="flex flex-col gap-5">
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

function PrazoAditivo(){
    return(
        <div>
            <DateInputWithValidation/>
        </div>
    );
}

export default PrazoAditivo;