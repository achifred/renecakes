import express, { Router } from "express";
import { User } from "../controller/users";
import { hasSession } from "../config/middlware";

const router = Router();
const user = new User();

router.get("/", user.getUsers);
router.post("/login", hasSession, user.login);
router.post("/register", hasSession, user.addUser);
router.get("/delete/:id", user.deleteUser);

export default router;
