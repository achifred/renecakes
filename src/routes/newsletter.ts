import { Router } from "express";
import { Newsletters } from "../controller/newsletter";

const router = Router();
const newsletter = new Newsletters();

router.post("/add", newsletter.addSubscriber);

export default router;
