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
const Siteinfo_1 = __importDefault(require("../model/Siteinfo"));
class Contact {
    constructor() {
        this.getContact = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Siteinfo_1.default.findAll();
            const data = {
                result: result.map(item => {
                    return {
                        email: item.email,
                        phone: item.phone,
                        address: item.address
                    };
                })
            };
            res.render("contact", { result: data.result });
        });
    }
}
exports.Contact = Contact;
