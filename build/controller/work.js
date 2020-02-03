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
Object.defineProperty(exports, "__esModule", { value: true });
class Work {
    constructor() {
        this.getWork = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.render("work");
        });
    }
    addwork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //const picture = req.file.path;
                console.log(req.file);
                //const result = await cloudinary.v2.uploader.upload(picture);
                //console.log(result);
                console.log("okay");
                res.redirect("/works/workadmin");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.Work = Work;
