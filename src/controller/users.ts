import bcrypt from "bcrypt";
import Users from "../model/Users";
export class User {
    async addUser(req: any, res: any) {
        try {
            const { name, email, password } = req.body;
            bcrypt.hash(password, 10, async (err, hash) => {
                try {
                    if (err) {
                        res.render("resgister", {
                            error: "registration failed"
                        });
                    } else {
                        const result = await Users.create({
                            name,
                            email,
                            password: hash
                        });
                        res.redirect("/users");
                    }
                } catch (error) {
                    console.log(error.message);
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async login(req: any, res: any) {
        try {
            const { email, password } = req.body;
            const result = await Users.findOne({
                where: {
                    email: email
                }
            });
            if (result != null) {
                bcrypt.compare(password, result.password, async (err, data) => {
                    if (err) {
                        res.render("login", {
                            error: "login failed",
                            name,
                            email
                        });
                    } else {
                        (req.session.userid = result.userid),
                            (req.session.name = result.name);
                        res.redirect("/dashboard");
                    }
                });
            } else {
                res.render("login", {
                    error: "login failed",
                    name,
                    email
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async getUsers(req: any, res: any) {
        try {
            const result = await Users.findAll();
            const data = {
                result: result.map(item => {
                    return {
                        name: item.name,
                        id: item.userid,
                        email: item.email
                    };
                })
            };
            res.render("users", {
                result: data.result,
                layout: "admin"
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteUser(req: any, res: any) {
        try {
            const id = req.params.id;
            const result = Users.destroy({
                where: {
                    userid: id
                }
            });
            res.redirect("/users");
        } catch (error) {
            console.log(error.message);
        }
    }
}
