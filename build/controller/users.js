"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users_1 = __importDefault(require("../model/Users"));
class User {
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                bcrypt_1.default.hash(password, 10, (err, hash) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        if (err) {
                            res.render("resgister", {
                                error: "registration failed"
                            });
                        }
                        else {
                            const result = yield Users_1.default.create({
                                name,
                                email,
                                password: hash
                            });
                            res.redirect("/users");
                        }
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                }));
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const result = yield Users_1.default.findOne({
                    where: {
                        email: email
                    }
                });
                if (result != null) {
                    bcrypt_1.default.compare(password, result.password, (err, data) => __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.render("login", {
                                error: "login failed",
                                name,
                                email
                            });
                        }
                        else {
                            (req.session.userid = result.userid),
                                (req.session.name = result.name);
                            res.redirect("/dashboard");
                        }
                    }));
                }
                else {
                    res.render("login", {
                        error: "login failed",
                        name,
                        email
                    });
                }
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Users_1.default.findAll();
                const data = {
                    result: result.map(item => {
                        return {
                            name: item.name,
                            id: item.userid,
                            email: item.email
                        };
                    })
                };
                res.render("users", {
                    result: data.result,
                    layout: "admin"
                });
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const result = Users_1.default.destroy({
                    where: {
                        userid: id
                    }
                });
                res.redirect("/users");
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
exports.User = User;
