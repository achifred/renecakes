import Enquery from "../model/Enqueries";

export class Enqueries {
    addEnquery = async (req: any, res: any) => {
        try {
            const { name, email, subject, message } = req.body;
            const error = [];
            if (!name) {
                error.push({ text: "name can not be empty" });
            }
            if (!email) {
                error.push({ text: "email can not be empty" });
            }
            if (!subject) {
                error.push({ text: "subject can not be empty" });
            }
            if (!message) {
                error.push({ text: "message can not be empty" });
            }
            if (error.length > 0) {
                res.render("contact", {
                    error,
                    name,
                    email,
                    subject,
                    message
                });
            } else {
                const result = Enquery.create({
                    name,
                    email,
                    subject,
                    message
                });
                res.redirect("/contact");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    async getEnqueries(req: any, res: any) {
        try {
            const result = await Enquery.findAll();
            const data = {
                result: result.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        message: item.message,
                        subject: item.subject
                    };
                })
            };

            res.render("enquery", {
                result: data.result,
                layout: "admin"
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteEnquery(req: any, res: any) {
        try {
            const id = req.params.id;
            const result = Enquery.destroy({
                where: {
                    id: id
                }
            });
            res.redirect("/enquery");
        } catch (error) {
            console.log(error.message);
        }
    }
}
