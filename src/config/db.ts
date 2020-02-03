import { Sequelize } from "sequelize-typescript";
import model from "../model/Enqueries";
import usermodel from "../model/Users";
import worksmodel from "../model/Works";
import siteinfomodel from "../model/Siteinfo";
import ordermodel from "../model/Order";
import newslettermodel from "../model/Newsletter";
import dotenv from "dotenv";
dotenv.config();
const dbname: any = process.env.DB_NAME;
const username: any = process.env.DB_USER;
const password: any = process.env.DB_PASS;
const host: any = process.env.DB_HOST;
const models = [
    model,
    usermodel,
    worksmodel,
    siteinfomodel,
    ordermodel,
    newslettermodel
];
export const db = new Sequelize(dbname, username, password, {
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

export default db;
