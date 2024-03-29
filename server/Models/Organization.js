import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    zone: { type: String, required: true },
    food_type: { type: String, required: true },
    food_name: { type: String, required: true },
    food_disc: { type: String, required: true },
    food_price: { type: Number, required: true },
    base_dist: { type: Number, required: true },
    per_km_price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Organization = mongoose.model("Organization", OrganizationSchema);
export default Organization;
