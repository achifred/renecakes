import express, { Router } from "express";
import { Enqueries } from "../controller/enquery";

const router = Router();
const enquery = new Enqueries();

router.post("/", enquery.addEnquery);
router.get("/", enquery.getEnqueries);
router.get("/delete/:id", enquery.deleteEnquery);

export default router;
