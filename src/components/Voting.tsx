// Файл: src/components/Voting.tsx
import React, { useState, useEffect } from 'react';

interface Props {
  voteId: string; // Уникальный ID для голосования, например, 'kiirlaen-votes'
}

export default function Voting({ voteId }: Props) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  // При загрузке компонента, читаем голоса и статус из localStorage
  useEffect(() => {
    const savedVotes = parseInt(localStorage.getItem(voteId) || '127'); // Начальное значение 127
    setVotes(savedVotes);

    const hasVoted = localStorage.getItem(`${voteId}-voted`) === 'true';
    setVoted(hasVoted);
  }, [voteId]);

  const handleVote = () => {
    if (!voted) {
      const newVotes = votes + 1;
      setVotes(newVotes);
      setVoted(true);

      // Сохраняем новые значения в localStorage
      localStorage.setItem(voteId, newVotes.toString());
      localStorage.setItem(`${voteId}-voted`, 'true');
    }
  };

  return (
    <div className="text-center my-12">
      <h3 className="text-xl font-bold mb-4">Kas see laenutüüp on sulle kasulik?</h3>
      <button 
        onClick={handleVote} 
        disabled={voted}
        className={`text-white font-bold py-3 px-6 rounded-lg text-lg transition-all shadow-lg flex items-center gap-2 mx-auto ${
          voted 
            ? 'bg-green-500 cursor-not-allowed' 
            : 'bg-cyan-500 hover:bg-cyan-600 hover:scale-105'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M17 10V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6h10z"/></svg>
        <span>{voted ? 'Hääl antud!' : 'Jah, on küll!'}</span>
        <span className="bg-white/30 text-white text-xs font-bold px-2 py-1 rounded-full">{votes}</span>
      </button>
    </div>
  );
}