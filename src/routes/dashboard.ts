import express, { Router, Request, Response } from "express";
import { isloggedin, hasSession } from "../config/middlware";
const router = Router();

router.get("/dashboard", isloggedin, (req: Request, res: Response) => {
    res.render("dashboard", { layout: "admin" });
});
router.get("/admin", hasSession, (req: Request, res: Response) => {
    res.render("login");
});

export default router;
