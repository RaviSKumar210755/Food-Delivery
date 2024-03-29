import React from "react";
import axios from "axios";
const CheckoutForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.organizationName.value,
      food_name: event.target.elements.foodName.value,
      food_type: event.target.elements.foodType.value,
      food_disc: event.target.elements.foodDescription.value,
      food_price: event.target.elements.foodPrice.value,
      zone: event.target.elements.zone.value,
      base_dist: event.target.elements.maxDistance.value,
      per_km_price: event.target.elements.extraPrice.value,
    };
    // console.log(formData);
    try {
      // Sending form data to the server using Axios POST request
      const response = await axios.post(
        "https://food-delivery-1-0l28.onrender.com/create-food",
        formData
      );
      console.log("Server response:", response.data);
      // Clearing the form fields after successful submission (optional)
      event.target.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mb-4">
      <main>
        <div className="py-5 text-center">
          <h2>Create Food</h2>
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
                  <label htmlFor="organizationName" className="form-label">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="organizationName"
                    placeholder="Please Enter Your Organization's Name Here."
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your Organization's Name Here.
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

                <div className="col-12">
                  <label htmlFor="foodDescription" className="form-label">
                    Food Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="foodDescription"
                    placeholder="Please enter Food Description."
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter Food Description.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="foodPrice" className="form-label">
                    Food Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="foodPrice"
                    placeholder="Please Enter Food Price in $"
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter Food Price.
                  </div>
                </div>
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
                <div className="col-12">
                  <label htmlFor="maxDistance" className="form-label">
                    Maximum Distance For Free Delivery For The Above Zone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="maxDistance"
                    placeholder="Please Enter Maximum Distance in km."
                    required
                  />
                  <div className="invalid-feedback">
                    Please Enter Maximum Distance in km.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="extraPrice" className="form-label">
                    Extra Price For Delivery Per KM
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="extraPrice"
                    placeholder="Please enter Extra Price For Delivery Per KM in $"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter Extra Price For Delivery Per KM in $
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to Create
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutForm;
