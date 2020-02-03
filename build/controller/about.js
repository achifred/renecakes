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
class About {
    getAbout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Siteinfo_1.default.findAll();
            const data = {
                result: result.map(item => {
                    return {
                        about: item.about,
                        mission: item.mission
                    };
                })
            };
            res.render("about", { result: data.result });
        });
    }
    getAboutAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Siteinfo_1.default.findAll();
            const data = {
                result: result.map(item => {
                    return {
                        about: item.about,
                        mission: item.mission,
                        email: item.email,
                        phone: item.phone,
                        address: item.address
                    };
                })
            };
            res.render("aboutadmin", {
                layout: "admin",
                result: data.result
            });
        });
    }
    getSingleAbout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Siteinfo_1.default.findAll();
            const data = {
                result: result.map(item => {
                    return {
                        about: item.about,
                        mission: item.mission,
                        email: item.email,
                        phone: item.phone,
                        address: item.address,
                        id: item.id
                    };
                })
            };
            res.render("editabout", {
                layout: "admin",
                result: data.result
            });
        });
    }
    updateAbout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { about, mission, email, phone, address, id } = req.body;
                //console.log(req.body);
                const result = yield Siteinfo_1.default.update({ about, mission, phone, email, address }, { where: { id: id } });
                if (result != null) {
                    res.redirect("/about/aboutadmin");
                }
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
exports.About = About;
