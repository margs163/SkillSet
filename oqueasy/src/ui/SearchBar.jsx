import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 bg-white rounded-md w-64 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
      </div>
      <p className="text-sm font-normal text-gray-500">6 items</p>
    </div>
  );
}
