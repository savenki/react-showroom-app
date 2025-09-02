import React, { useState } from "react";
import SearchComponent from "../other/search";
import CarComponent from "../other/car";

export default function CarListingPage() {
  const [filters, setFilters] = useState({ category: "", carname: "" });

  const handleSearch = (category, carname) => {
    setFilters({ category, carname });
  };

  return (
    <div>
     <SearchComponent onSearch={handleSearch} />
      <CarComponent filters={filters} />
    </div>
  );
}