import React from "react";

const MyTable = ({ data }) => {
  console.log("Row", data);
  return (
    <div className="mb-10">
      <h2 class="display-6 text-center mb-4 mt-4">Compare plans</h2>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Sl</th>
            <th scope="col">Food Name</th>
            <th scope="col">Food Type</th>
            <th scope="col">Company Name</th>
            <th scope="col">Price</th>
            <th scope="col">Buy</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.food_name}</td>
              <td>{item.food_type}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button type="button" className="btn btn-success">
                  Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
