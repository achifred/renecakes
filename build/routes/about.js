"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const about_1 = require("../controller/about");
const router = express_1.Router();
const about = new about_1.About();
router.get("/", about.getAbout);
router.get("/aboutadmin", about.getAboutAdmin);
router.get("/edit", about.getSingleAbout);
router.post("/update", about.updateAbout);
exports.default = router;