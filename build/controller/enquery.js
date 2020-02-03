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
const Enqueries_1 = __importDefault(require("../model/Enqueries"));
class Enqueries {
    constructor() {
        this.addEnquery = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, subject, message } = req.body;
                const error = [];
                if (!name) {
                    error.push({ text: "name can not be empty" });
                }
                if (!email) {
                    error.push({ text: "email can not be empty" });
                }
                if (!subject) {
                    error.push({ text: "subject can not be empty" });
                }
                if (!message) {
                    error.push({ text: "message can not be empty" });
                }
                if (error.length > 0) {
                    res.render("contact", {
                        error,
                        name,
                        email,
                        subject,
                        message
                    });
                }
                else {
                    const result = Enqueries_1.default.create({
                        name,
                        email,
                        subject,
                        message
                    });
                    res.redirect("/contact");
                }
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    getEnqueries(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Enqueries_1.default.findAll();
                const data = {
                    result: result.map(item => {
                        return {
                            id: item.id,
                            name: item.name,
                            email: item.email,
                            message: item.message,
                            subject: item.subject
                        };
                    })
                };
                res.render("enquery", {
                    result: data.result,
                    layout: "admin"
                });
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    deleteEnquery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const result = Enqueries_1.default.destroy({
                    where: {
                        id: id
                    }
                });
                res.redirect("/enquery");
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
exports.Enqueries = Enqueries;
