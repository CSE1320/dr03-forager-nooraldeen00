"use client";

import { useState } from "react";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";
import PillList from "../../components/PillList";
import Mushroom from "../../components/Mushroom";
import { mushrooms } from "../../data/mushrooms";

export default function DashboardPage() {
  const [query, setQuery] = useState("");

  const filtered = mushrooms.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <h1 className="text-xl font-bold mb-4">Welcome to Forager</h1>

      <Search value={query} onChange={(e) => setQuery(e.target.value)} />

      <PillList title="Tags" />
      <PillList title="Regions" />
      <PillList title="Category" />

      <h2 className="text-lg font-semibold mt-4 mb-2">Your Mushrooms</h2>
      <div className="flex gap-4 overflow-x-auto">
        {filtered.map((m, i) => (
          <Mushroom key={i} name={m.name} src={m.image} />
        ))}
      </div>

      <NavBar />
    </div>
  );
}
