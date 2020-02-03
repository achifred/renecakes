import express, { Router } from "express";
import { Order } from "../controller/order";

const router = Router();
const order = new Order();

router.get("/", order.Order);
router.post("/add", order.addOrder);
router.get("/orderadmin", order.getOrders);
router.get("/delete/:id", order.deleteOrder);
export default router;
