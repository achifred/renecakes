"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsletter_1 = require("../controller/newsletter");
const router = express_1.Router();
const newsletter = new newsletter_1.Newsletters();
router.post("/add", newsletter.addSubscriber);
exports.default = router;
