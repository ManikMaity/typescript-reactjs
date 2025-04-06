"use client";

import React, { useEffect, useState } from "react";

type SearchDataType = {
  searchText : string,
  createdAt : string,
  user : string
}

export default function Header() {


  const [searchTerm, setSearchTerm] = useState("");
  const [searchDataObj, setSearchDataObj] = useState<SearchDataType | null>(null);

    function handleSearchClick (e : React.MouseEvent<HTMLButtonElement>) : void {
        e.preventDefault();
        setSearchDataObj({
          searchText : searchTerm,
          createdAt : new Date().toISOString(),
          user : "User" + Math.floor(Math.random() * 30)
        })
        console.log("Search", searchDataObj);
    }


    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setSearchTerm(e.target.value);
    }

  return (
    <form className="flex justify-center gap-4 items-center p-4 bg-gray-900">
        <input type="text" placeholder="Search" className="p-2" value={searchTerm} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearchClick}>Search</button>
    </form>
  )
}
