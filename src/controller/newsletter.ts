import Newsletter from "../model/Newsletter";

export class Newsletters {
    async addSubscriber(req: any, res: any) {
        try {
            const { email } = req.body;
            const data = await Newsletter.findOne({ where: { email: email } });
            if (data != null) {
                res.render("index", {
                    layout: "landing",
                    message: "You have already subscribe"
                });
            } else {
                const result = await Newsletter.create({ email });
                if (result != null) {
                    res.render("index", {
                        layout: "landing",
                        message: "subscription successful"
                    });
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}
