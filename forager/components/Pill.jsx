"use client";

import { useState } from 'react';

export default function Pill({ label }) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`px-3 py-1 rounded-full text-sm border ${selected ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
    >
      {label}
    </button>
  );
}
