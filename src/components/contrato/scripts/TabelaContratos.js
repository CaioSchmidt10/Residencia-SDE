import React, { useState } from 'react';
import { Pen, Eye, Trash } from 'lucide-react';

const TableComponent = () => {
  const [rows, setRows] = useState([
    { id: 1, contractNumber: '0A0A0A0A0A0A', supplier: 'Nome do Fornecedor', inspector: 'Nome do Fiscal', object: 'Objeto', management: 'Gerência', startDate: 'dd/mm/aaaa', endDate: 'dd/mm/aaaa' },
    { id: 2, contractNumber: '0A0A0A0A0A0A', supplier: 'Nome do Fornecedor', inspector: 'Nome do Fiscal', object: 'Objeto', management: 'Gerência', startDate: 'dd/mm/aaaa', endDate: 'dd/mm/aaaa' },
    // Adicione mais linhas conforme necessário
  ]);

  const deleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const trocarTela = () => {
    console.log("Trocar tela");
  };

  return (
    <div className="overflow-x-auto py-8 ">
      <table className="table-auto border-collapse border xl:w-full">
        <thead className="bg-[#E5E5E5] border border-blue-500">
          <tr>
            <th className="border border-black px-6 py-2">N° do Contrato</th>
            <th className="border border-black px-12 py-2">Fornecedor</th>
            <th className="border border-black px-14 py-2">Fiscal</th>
            <th className="border border-black px-14 py-2">Objeto</th>
            <th className="border border-black px-4 py-2">Gerência</th>
            <th className="border border-black px-7 py-2">Vig. Início</th>
            <th className="border border-black px-7 py-2">Vig. Fim</th>
            <th className="border border-black px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {rows.map(row => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{row.contractNumber}</td>
              <td className="border px-4 py-2">{row.supplier}</td>
              <td className="border px-4 py-2">{row.inspector}</td>
              <td className="border px-4 py-2">{row.object}</td>
              <td className="border px-4 py-2">{row.management}</td>
              <td className="border px-4 py-2">{row.startDate}</td>
              <td className="border px-4 py-2">{row.endDate}</td>
              <td className="flex flex-row gap-1 px-1 py-2 justify-center">
                <button onClick={trocarTela} className="text-blue-500 hover:text-blue-700">
                  <Pen size={20} strokeWidth={1.25} />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <Eye strokeWidth={1.25} />
                </button>
                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700">
                  <Trash strokeWidth={1.25} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
