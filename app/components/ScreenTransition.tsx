"use client";

import { useEffect, useState } from 'react';

export default function ScreenTransition() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${isActive ? 'loader--active' : ''}`}>
      <div className="loader__icon">
        {/* Ícone ou logo da sua aplicação */}
        <svg
          className="w-12 h-12 text-cyan-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Coloque o conteúdo do seu ícone aqui */}
        </svg>
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="loader__tile" />
      ))}
    </div>
  );
}