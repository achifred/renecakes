import express, { Router } from "express";
import { Contact } from "../controller/contact";

const router = Router();
const contact = new Contact();

router.get("/", contact.getContact);

export default router;
