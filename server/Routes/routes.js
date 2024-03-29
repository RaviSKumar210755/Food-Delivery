import express from "express";
import Create from "../Controller/create-food.js";
import GetPrice from "../Controller/get-price.js";
const router = express.Router();

router.post("/create-food", Create);
router.post("/get-price", GetPrice);

export default router;
