"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_1 = require("../controller/contact");
const router = express_1.Router();
const contact = new contact_1.Contact();
router.get("/", contact.getContact);
exports.default = router;
