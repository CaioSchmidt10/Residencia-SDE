import React, { useState, useEffect } from 'react';

const Atualizacao = () => {
  const [dataHora, setDataHora] = useState('');

  useEffect(() => {
    const obterDataHoraAtual = () => {
      const agora = new Date();
      const dia = String(agora.getDate()).padStart(2, '0');
      const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
      const ano = agora.getFullYear();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');

      return `Atualizado em ${dia}/${mes}/${ano} às ${horas}:${minutos}`;
    };

    setDataHora(obterDataHoraAtual());
  }, []);

  return (
    <div>
      <p className="text-[#575757] text-lg pt-2">{dataHora}</p>
    </div>
  );
};

export default Atualizacao;