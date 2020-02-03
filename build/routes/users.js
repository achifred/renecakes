"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controller/users");
const middlware_1 = require("../config/middlware");
const router = express_1.Router();
const user = new users_1.User();
router.get("/", user.getUsers);
router.post("/login", middlware_1.hasSession, user.login);
router.post("/register", middlware_1.hasSession, user.addUser);
router.get("/delete/:id", user.deleteUser);
exports.default = router;
