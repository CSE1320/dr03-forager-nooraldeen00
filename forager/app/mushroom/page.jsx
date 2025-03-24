"use client";

import { useState } from "react";
import NavBar from "../../components/NavBar";
import MushroomCard from "../../components/MushroomCard";
import SimilarMatchList from "../../components/SimilarMatchList";
import { BiGitCompare } from "react-icons/bi";

export default function MushroomPage() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/Background.jpg')" }}
    >
      <div className="min-h-screen p-4 bg-white/90 backdrop-blur-sm relative">
        <div className="rounded-xl shadow-lg bg-white p-4">
          <MushroomCard />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <a
            href="/mushroomcomparison"
            className="text-blue-600 underline text-sm"
          >
            Compare
          </a>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-3 rounded-xl font-semibold shadow transition-all ${
              isFavorite ? "bg-red-600 text-white" : "bg-green-600 text-white"
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-bold mb-2">Similar Matches</h3>
          <SimilarMatchList />
        </div>

        {/* FAB for Compare */}
        <a
          href="/mushroomcomparison"
          className="fixed bottom-20 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <BiGitCompare size={24} />
        </a>

        <NavBar />
      </div>
    </div>
  );
}
