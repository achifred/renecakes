export const isloggedin = (req: any, res: any, next: any) => {
    if (!req.session.userid) {
        res.redirect("/");
    } else {
        next();
    }
};

export const hasSession = (req: any, res: any, next: any) => {
    if (req.session.userid) {
        res.redirect("/dashboard");
    } else {
        next();
    }
};
