"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let Orders = class Orders extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED
    }),
    __metadata("design:type", String)
], Orders.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Orders.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Orders.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Orders.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Orders.prototype, "location", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Orders.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Orders.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.TEXT
    }),
    __metadata("design:type", String)
], Orders.prototype, "note", void 0);
Orders = __decorate([
    sequelize_typescript_1.Table({
        paranoid: true,
        defaultScope: {
            attributes: {
                exclude: ["deletedAt"]
            }
        },
        tableName: "order"
    })
], Orders);
exports.Orders = Orders;
exports.default = Orders;
