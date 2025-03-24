"use client";

import NavBar from "../../components/NavBar";
import BackgroundScreen from "../../components/BackgroundScreen";

export default function PhotoSearchPage() {
  return (
    <div
      className="relative w-full h-[896px] bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/Background.jpg')" }} 
    >
      {/* Simulated Camera Overlay */}
      <BackgroundScreen />

      {/* FAB camera tap (optional) */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <button className="bg-white p-5 rounded-full shadow-md hover:scale-105 transition">
          <img
            src="/camera.png"
            alt="Tap to capture"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Bottom Navigation */}
      <NavBar />
    </div>
  );
}
