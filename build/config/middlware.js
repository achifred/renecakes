"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isloggedin = (req, res, next) => {
    if (!req.session.userid) {
        res.redirect("/");
    }
    else {
        next();
    }
};
exports.hasSession = (req, res, next) => {
    if (req.session.userid) {
        res.redirect("/dashboard");
    }
    else {
        next();
    }
};
