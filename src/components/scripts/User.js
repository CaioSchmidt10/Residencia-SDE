import React, { useContext } from 'react';
import { SquareUserRound } from 'lucide-react';

const FiscalCard = () => {


  return (
    <div className="flex flex-row gap-3 px-5 py-3 drop-shadow-lg">
      <button>
        <SquareUserRound size={80} />
      </button>
      <div>
        <button className='text-lg mt-4 hover:bg-gray-400 rounded hover:text-slate-600'>
          Nome do Fiscal
        </button>
        <p>Matricula: 000000</p>
      </div>
    </div>
  );
}

export default FiscalCard;
