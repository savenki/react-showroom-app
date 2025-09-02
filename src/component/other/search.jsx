import React, { useState } from "react";

export default function SearchComponent(props) {
  const cartypes = [
    { id: "81", category: "Hatchback" },
    { id: "82", category: "Sedan" },
    { id: "83", category: "SUV" },
    { id: "84", category: "MUV" },
    { id: "85", category: "Coupe" },
    { id: "86", category: "Convertibles" },
    { id: "87", category: "Pickup Trucks" },
  ];

  const [searchedCar, setSearchedCar] = useState("");
  const [searchedCategory, setSearchedCategory] = useState("");

  const handleCarSelection = (e) => setSearchedCar(e.target.value);
  const handleCategorySelection = (e) => setSearchedCategory(e.target.value);

  const onSearchButtonClick = () => {
  if (typeof props.onSearch === "function") {
    let search = props['onSearch'];
    props.onSearch(searchedCategory, searchedCar);
  } else {
    console.warn("onSearch prop is not a function");
  }
};

  return (
    <div className="container my-4">
      <div className="row g-2 bg-light p-3 rounded">
        <div className="col-md-3">
          <div className="input-group bg-light">
            <span className="input-group-text bg-light border-0">
              <i className="fas fa-filter text-dark"></i>
            </span>
            <select
              className="form-select border-0 bg-light text-dark"
              style={{ boxShadow: "none" }}
              onChange={handleCategorySelection}
            >
              <option value="">Select Category</option>
              {cartypes.map((cartype, index) => (
                <option key={index} value={cartype.id}>
                  {cartype.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Company/Model"
            style={{ boxShadow: "none" }}
            onChange={handleCarSelection}
          />
        </div>

        <div className="col-md-3 d-flex align-items-center">
          <button
            className="btn btn-dark"
            style={{ width: "auto", whiteSpace: "nowrap" }}
            onClick={onSearchButtonClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}