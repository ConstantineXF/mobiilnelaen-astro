// Файл: src/components/InteractiveCost.tsx
import React, { useState, useEffect } from 'react';

export default function InteractiveCost() {
  const [amount, setAmount] = useState(5000);
  const [term, setTerm] = useState(60);
  const [interest, setInterest] = useState(12.9);
  const [fee, setFee] = useState(50);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const monthlyInterest = (interest / 100) / 12;
    const n = term;
    const p = amount;
    if (monthlyInterest > 0) {
      const payment = p * (monthlyInterest * Math.pow(1 + monthlyInterest, n)) / (Math.pow(1 + monthlyInterest, n) - 1);
      setMonthlyPayment(payment);
      setTotalCost((payment * n) + fee);
    } else {
      setMonthlyPayment(p / n);
      setTotalCost(p + fee);
    }
  }, [amount, term, interest, fee]);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-center mb-6">Krediidi kulukuse näide</h3>
        <div className="space-y-6">
          {/* Sliders */}
          <div>
            <label>Laenusumma: <span className="font-bold text-cyan-400">{amount} €</span></label>
            <input type="range" min="500" max="25000" step="100" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider-dark mt-2" />
          </div>
          <div>
            <label>Periood: <span className="font-bold text-cyan-400">{term} kuud</span></label>
            <input type="range" min="6" max="120" step="1" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider-dark mt-2" />
          </div>
          {/* Results */}
          <div className="text-lg text-center bg-black/20 p-6 rounded-lg">
            Võttes laenu summas <span className="font-bold text-cyan-300">{amount} €</span> perioodiga <span className="font-bold text-cyan-300">{term} kuud</span>, intressiga <span className="font-bold text-cyan-300">{interest}%</span> ja lepingutasuga <span className="font-bold text-cyan-300">{fee} €</span>, on sinu ligikaudne kuumakse <span className="font-bold text-2xl text-white">{monthlyPayment.toFixed(2)} €</span>. Kogu tagasimakstav summa on <span className="font-bold text-2xl text-white">{totalCost.toFixed(2)} €</span>.
          </div>
        </div>
      </div>
    </section>
  );
}