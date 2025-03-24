"use client";

import { useState } from "react";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";
import PillList from "../../components/PillList";
import Mushroom from "../../components/Mushroom";
import { mushrooms } from "../../data/mushrooms";
import { tags, regions, categories } from "../../data/filters";

export default function DashboardPage() {
  const [query, setQuery] = useState("");

  const filtered = mushrooms.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/Background.jpg')" }}
    >
      <div className="min-h-screen p-4 bg-white bg-opacity-80 backdrop-blur-sm">
        <h1 className="text-xl font-bold mb-4">Welcome to Forager</h1>

        <Search value={query} onChange={(e) => setQuery(e.target.value)} />

        <PillList title="Tags" items={tags} color="green" />
        <PillList title="Regions" items={regions} color="blue" />
        <PillList title="Category" items={categories} color="purple" />

        <h2 className="text-lg font-semibold mt-4 mb-2">Your Mushrooms</h2>
        <div className="flex gap-4 overflow-x-auto">
          {filtered.map((m, i) => (
            <Mushroom key={i} name={m.name} src={m.image} />
          ))}
        </div>

        <NavBar />
      </div>
    </div>
  );
}
