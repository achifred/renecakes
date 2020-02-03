import express, { Router } from "express";
import { Work } from "../controller/work";

const router = Router();
const work = new Work();

router.get("/", work.getWork);
router.post("/add", work.addwork);
router.get("/workadmin", (req: any, res: any) => {
    res.render("workadmin", { layout: "admin" });
});
export default router;
