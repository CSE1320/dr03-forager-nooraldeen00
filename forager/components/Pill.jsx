"use client";
import { useState } from "react";

export default function Pill({ label, color = "gray" }) {
  const [selected, setSelected] = useState(false);

  const base = "px-3 py-1 rounded-full text-sm border font-medium";
  const selectedStyle = `bg-${color}-600 text-white`;
  const unselectedStyle = `bg-${color}-100 text-${color}-800`;

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`${base} ${selected ? selectedStyle : unselectedStyle}`}
    >
      {label}
    </button>
  );
}
