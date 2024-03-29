import Organization from "../Models/Organization.js";
const Create = async (req, res) => {
  const {
    name,
    zone,
    food_type,
    food_name,
    food_disc,
    food_price,
    base_dist,
    per_km_price,
  } = req.body;
  try {
    if (
      !food_type ||
      !food_name ||
      !zone ||
      !name ||
      !food_disc ||
      !food_price ||
      !base_dist ||
      !per_km_price
    ) {
      return res.status(500).json({ message: "Please fill all fields" });
    }
    const newOrg = new Organization({
      name,
      zone,
      food_type,
      food_name,
      food_disc,
      food_price,
      base_dist,
      per_km_price,
    });
    await newOrg.save();
    res.status(200).json(newOrg);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
export default Create;
