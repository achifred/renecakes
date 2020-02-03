"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Enqueries_1 = __importDefault(require("../model/Enqueries"));
const Users_1 = __importDefault(require("../model/Users"));
const Works_1 = __importDefault(require("../model/Works"));
const Siteinfo_1 = __importDefault(require("../model/Siteinfo"));
const Order_1 = __importDefault(require("../model/Order"));
const Newsletter_1 = __importDefault(require("../model/Newsletter"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbname = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const models = [
    Enqueries_1.default,
    Users_1.default,
    Works_1.default,
    Siteinfo_1.default,
    Order_1.default,
    Newsletter_1.default
];
exports.db = new sequelize_typescript_1.Sequelize(dbname, username, password, {
    host: host,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true
    },
    logging: false,
    models
});
exports.default = exports.db;
