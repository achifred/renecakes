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
const Order_1 = __importDefault(require("../model/Order"));
class Order {
    Order(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.render("order");
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    addOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, phone, location, date, note, type } = req.body;
                const result = yield Order_1.default.create({
                    name,
                    email,
                    type,
                    location,
                    phone,
                    date,
                    note
                });
                if (result != null) {
                    res.render("order", { message: "order sent successfully" });
                }
                else {
                    res.render("order", { message: "Failed to order" });
                }
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    getOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Order_1.default.findAll();
                const data = {
                    result: result.map(item => {
                        return {
                            name: item.name,
                            email: item.email,
                            type: item.type,
                            phone: item.phone,
                            location: item.location,
                            note: item.note,
                            date: item.date,
                            id: item.id
                        };
                    })
                };
                res.render("orderadmin", {
                    layout: "admin",
                    result: data.result
                });
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const result = Order_1.default.destroy({
                    where: {
                        id: id
                    }
                });
                res.redirect("/order/orderadmin");
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
exports.Order = Order;
