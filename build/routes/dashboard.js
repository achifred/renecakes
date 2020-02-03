"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlware_1 = require("../config/middlware");
const router = express_1.Router();
router.get("/dashboard", middlware_1.isloggedin, (req, res) => {
    res.render("dashboard", { layout: "admin" });
});
router.get("/admin", middlware_1.hasSession, (req, res) => {
    res.render("login");
});
exports.default = router;
