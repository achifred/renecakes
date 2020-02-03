"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const express_session_1 = __importDefault(require("express-session"));
const about_1 = __importDefault(require("./routes/about"));
const contact_1 = __importDefault(require("./routes/contact"));
const work_1 = __importDefault(require("./routes/work"));
const enquery_1 = __importDefault(require("./routes/enquery"));
const dashboard_1 = __importDefault(require("./routes/dashboard"));
const users_1 = __importDefault(require("./routes/users"));
const order_1 = __importDefault(require("./routes/order"));
const newsletter_1 = __importDefault(require("./routes/newsletter"));
const db_1 = __importDefault(require("./config/db"));
db_1.default.authenticate()
    .then(() => console.log("db up"))
    .catch(error => console.log(error));
const app = express_1.default();
app.engine("handlebars", express_handlebars_1.default({
    defaultLayout: "main",
    extname: "handlebars",
    layoutsDir: path_1.default.join(__dirname, "../views"),
    partialsDir: path_1.default.join(__dirname, "../views")
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.set("view engine", "handlebars");
app.use(express_session_1.default({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    cookie: {
        maxAge: 7200000,
        sameSite: true
    }
}));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/about", about_1.default);
app.use("/contact", contact_1.default);
app.use("/works", work_1.default);
app.use("/enquery", enquery_1.default);
app.use("/", dashboard_1.default);
app.use("/users", users_1.default);
app.use("/order", order_1.default);
app.use("/newsletter", newsletter_1.default);
app.get("/", (req, res) => {
    //console.log(req.session);
    res.render("index", { layout: "landing" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server running"));
