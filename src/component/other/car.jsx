import React from "react";

export default function CarComponent({
  filters = { category: "", carname: "" },
}) {
  const cartypes = [
    { id: "81", category: "Hatchback" },
    { id: "82", category: "Sedan" },
    { id: "83", category: "SUV" },
    { id: "84", category: "MUV" },
    { id: "85", category: "Coupe" },
    { id: "86", category: "Convertibles" },
    { id: "87", category: "Pickup Trucks" },
  ];

  const getCategoryName = (id) => {
    const type = cartypes.find((t) => t.id === id);
    return type ? type.category : "";
  };

  const cars = [
    {
      date: "09-Mar-2022",
      carname: "Ford Ranger",
      reviews: 203,
      image: "https://picsum.photos/id/111/200/150",
      mileage: "45000 KM",
      location: "Delhi",
      engine: "3.5 diesel",
      transmission: "Machine",
      type: "Sedan",
      price: "Rs.100000",
    },
    {
      date: "11-Aug-2022",
      carname: "Mustang GT",
      reviews: 278,
      image: "https://picsum.photos/id/133/200/150",
      mileage: "33000 KM",
      location: "Delhi",
      engine: "2.2 petrol",
      transmission: "Machine",
      type: "SUV",
      price: "Rs.970000",
    },
    {
      date: "02-Jun-2021",
      carname: "BMW X7",
      reviews: 91,
      image: "https://picsum.photos/id/183/200/150",
      mileage: "59000 KM",
      location: "Mumbai",
      engine: "3.5 diesel",
      transmission: "Machine",
      type: "Sedan",
      price: "Rs.550000",
    },
    {
      date: "22-Jan-2019",
      carname: "Honda CR-V",
      reviews: 312,
      image: "https://picsum.photos/id/514/200/150",
      mileage: "21000 KM",
      location: "Bangaluru",
      engine: "2.2 petrol",
      transmission: "Machine",
      type: "MUV",
      price: "Rs.110000",
    },
    {
      date: "02-Jun-2021",
      carname: "Audi TT",
      reviews: 91,
      image: "https://picsum.photos/id/655/200/150",
      mileage: "21000 KM",
      location: "Mumbai",
      engine: "3.5 diesel",
      transmission: "Machine",
      type: "Sedan",
      price: "Rs.130000",
    },
    {
      date: "22-Jan-2019",
      carname: "Ford Explorer",
      reviews: 312,
      image: "https://picsum.photos/id/1071/200/150",
      mileage: "10000 KM",
      location: "Bangaluru",
      engine: "2.2 petrol",
      transmission: "Machine",
      type: "Sedan",
      price: "Rs.180000",
    },
    {
      date: "02-Jun-2021",
      carname: "Audi TT",
      reviews: 91,
      image: "https://picsum.photos/id/45/200/150",
      mileage: "21000 KM",
      location: "Mumbai",
      engine: "3.5 diesel",
      transmission: "Machine",
      type: "Sedan",
      price: "Rs.150000",
    },
    {
      date: "22-Jan-2019",
      carname: "Ford Explorer",
      reviews: 312,
      image: "https://picsum.photos/id/146/200/150",
      mileage: "10000 KM",
      location: "Bangaluru",
      engine: "2.2 petrol",
      transmission: "Machine",
      type: "Sedan",
      price: "Rs.130000",
    },
  ];

  const filteredCars = cars.filter((car) => {
    const matchesName =
      filters.carname === "" ||
      car.carname.toLowerCase().includes(filters.carname.toLowerCase());
    const matchesType =
      filters.category === "" || car.type === getCategoryName(filters.category);
    return matchesName && matchesType;
  });

  return (
    <div className="container my-4">
      <div className="p-4 bg-white rounded shadow">
        <div className="row">
          {filteredCars.map((car, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 rounded border">
                <div className="card-body p-2">
                  <div className="d-flex justify-content-between small text-muted mb-1">
                    <span>{car.date}</span>
                    <span className="text-primary">Reviews {car.reviews}</span>
                  </div>
                  <h5 className="card-title text-danger mb-2">
                    {car.carname}{" "}
                    <span className="text-dark">({car.type})</span>
                  </h5>
                  <img
                    src={car.image}
                    alt={car.carname}
                    className="img-fluid rounded mb-2"
                  />
                  <div className="mb-2 small">
                    <div className="row">
                      <div className="col-6">
                        <strong>Mileage</strong> <br />
                        {car.mileage}
                      </div>
                      <div className="col-6">
                        <strong>Location</strong> <br />
                        {car.location}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <strong>Engine</strong> <br />
                        {car.engine}
                      </div>
                      <div className="col-6">
                        <strong>Transmission</strong> <br />
                        {car.transmission}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">{car.price}</span>
                    <button className="btn btn-sm btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredCars.length === 0 && (
            <div className="text-center text-muted">No cars found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
