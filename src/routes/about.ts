import express, { Router } from "express";
import { About } from "../controller/about";

const router = Router();
const about = new About();

router.get("/", about.getAbout);
router.get("/aboutadmin", about.getAboutAdmin);
router.get("/edit", about.getSingleAbout);
router.post("/update", about.updateAbout);

export default router;
