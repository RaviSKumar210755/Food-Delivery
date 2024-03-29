import React from "react";
import axios from "axios";
import PriceList from "./PriceList";
const CheckoutForm = ({ data, setData }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      food_name: event.target.elements.foodName.value,
      food_type: event.target.elements.foodType.value,
      zone: event.target.elements.zone.value,
      dist: event.target.elements.dist.value,
    };
    console.log(formData);
    try {
      // Sending form data to the server using Axios POST request
      const response = await axios.post(
        "http://localhost:3000/get-price",
        formData
      );
      console.log("Server response:", response.data);
      event.target.reset();
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Order Food</h2>
        </div>
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <form
              className="needs-validation"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="zone" className="form-label">
                    Zone
                  </label>
                  <select className="form-select" id="zone" required>
                    <option value="">Choose...</option>
                    <option>Central</option>
                    <option>East</option>
                    <option>West</option>
                    <option>North</option>
                    <option>South</option>
                  </select>
                  <div className="invalid-feedback">
                    Please enter Zone For Delivery
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="foodType" className="form-label">
                    Food Type
                  </label>
                  <select className="form-select" id="foodType" required>
                    <option value="">Choose...</option>
                    <option>Perishable</option>
                    <option>Non-Perishable</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid Type.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="foodName" className="form-label">
                    Food Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="foodName"
                    placeholder="Enter Food Name Here"
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="dist" className="form-label">
                    Distance
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dist"
                    placeholder="Please enter Distance in KM"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter Distance in KM
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Check Price
              </button>
            </form>
          </div>
        </div>
      </main>
      {data.length && <PriceList data={data} />}
    </div>
  );
};

export default CheckoutForm;
