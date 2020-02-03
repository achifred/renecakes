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
const Newsletter_1 = __importDefault(require("../model/Newsletter"));
class Newsletters {
    addSubscriber(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const data = yield Newsletter_1.default.findOne({ where: { email: email } });
                if (data != null) {
                    res.render("index", {
                        layout: "landing",
                        message: "You have already subscribe"
                    });
                }
                else {
                    const result = yield Newsletter_1.default.create({ email });
                    if (result != null) {
                        res.render("index", {
                            layout: "landing",
                            message: "subscription successful"
                        });
                    }
                }
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
exports.Newsletters = Newsletters;
