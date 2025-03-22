"use client";

export default function Search({ value, onChange }) {
  return (
    <div className="flex items-center border rounded-lg p-2 mb-4 bg-white">
      <input
        type="text"
        placeholder="Search for a mushroom"
        className="flex-1 outline-none text-sm"
        value={value}
        onChange={onChange}
      />
      <img src="/search-icon.svg" alt="search" className="w-5 h-5" />
    </div>
  );
}
