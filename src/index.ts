import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import exphbs from "express-handlebars";
import session from "express-session";
import Aboutroute from "./routes/about";
import Contactroute from "./routes/contact";
import workroute from "./routes/work";
import enqueryroute from "./routes/enquery";
import dashboardroute from "./routes/dashboard";
import userroute from "./routes/users";
import orderroute from "./routes/order";
import newsletterroute from "./routes/newsletter";
import db from "./config/db";

db.authenticate()
    .then(() => console.log("db up"))
    .catch(error => console.log(error));
const app: Application = express();
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main",
        extname: "handlebars",
        layoutsDir: path.join(__dirname, "../views"),
        partialsDir: path.join(__dirname, "../views")
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "handlebars");
app.use(
    session({
        name: "sid",
        resave: false,
        saveUninitialized: false,
        secret: "secret",
        cookie: {
            maxAge: 7200000,
            sameSite: true
        }
    })
);
app.use(express.static(path.join(__dirname, "../public")));
app.use("/about", Aboutroute);
app.use("/contact", Contactroute);
app.use("/works", workroute);
app.use("/enquery", enqueryroute);
app.use("/", dashboardroute);
app.use("/users", userroute);
app.use("/order", orderroute);
app.use("/newsletter", newsletterroute);
app.get("/", (req: Request, res: Response) => {
    //console.log(req.session);
    res.render("index", { layout: "landing" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server running"));
