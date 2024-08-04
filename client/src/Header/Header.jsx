import React, { useState } from "react";
import "./Header.css";
import { Button, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearch = () => {
    onSearch(searchQuery);
    console.log(searchQuery);
    setSearchQuery("");
  };
  return (
    <header className="image">
      <div class="header">
        <div className="flex gap-2 justify-between">
          
            
          <Link to="/" className="logo text-white">
            RiverWatch
          </Link>
          
          <div className="flex flex-col md:flex-row col text-white">
            <div>
            <Link class="text-white font-semibold " to ="/">Home</Link>
            </div>
            
            <div>
            <Link class="text-white font-semibold" to="/About">About</Link>
            </div>
            
            
          </div>
          <div className="flex gap-2 max-h-12">
          <input
            type="text"
            class="rounded-md text-s"
            placeholder="Search for a region/river..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <button class="text-3xl font-extrabold" onClick={handleSearch}><AiOutlineSearch></AiOutlineSearch></button>
          </div>
        </div>
      </div>
    </header>
  );
}
