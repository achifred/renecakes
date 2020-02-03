"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const work_1 = require("../controller/work");
const router = express_1.Router();
const work = new work_1.Work();
router.get("/", work.getWork);
router.post("/add", work.addwork);
router.get("/workadmin", (req, res) => {
    res.render("workadmin", { layout: "admin" });
});
exports.default = router;
