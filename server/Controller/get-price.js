import Organization from "../Models/Organization.js";

const GetPrice = async (req, res) => {
  try {
    const { zone, food_type, food_name, dist } = req.body;
    if (!food_type || !food_name || !zone || !dist) {
      return res.status(500).json({ message: "Please fill all fields" });
    }

    const data = await Organization.find({
      zone,
      food_type,
      food_name,
    });
    let result = [];
    for (let i = 0; i < data.length; i++) {
      let price = data[i].food_price;
      if (dist > data[i].base_dist)
        price += (dist - data[i].base_dist) * data[i].per_km_price;
      const temp = {
        name: data[i].name,
        food_name: data[i].food_name,
        food_type: data[i].food_type,
        price: price,
      };
      result.push(temp);
    }
    res.status(200).json(result);
    console.log(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export default GetPrice;
