import express from "express";
import { verifyToken } from "../config/jwt.js";
import { getOrders, intent, confirm } from "../controller/orderController.js";

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;