import Orders from "../model/Order";

export class Order {
    async Order(req: any, res: any) {
        try {
            res.render("order");
        } catch (error) {
            console.log(error.message);
        }
    }

    async addOrder(req: any, res: any) {
        try {
            const { name, email, phone, location, date, note, type } = req.body;
            const result = await Orders.create({
                name,
                email,
                type,
                location,
                phone,
                date,
                note
            });
            if (result != null) {
                res.render("order", { message: "order sent successfully" });
            } else {
                res.render("order", { message: "Failed to order" });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async getOrders(req: any, res: any) {
        try {
            const result = await Orders.findAll();
            const data = {
                result: result.map(item => {
                    return {
                        name: item.name,
                        email: item.email,
                        type: item.type,
                        phone: item.phone,
                        location: item.location,
                        note: item.note,
                        date: item.date,
                        id: item.id
                    };
                })
            };
            res.render("orderadmin", {
                layout: "admin",
                result: data.result
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    async deleteOrder(req: any, res: any) {
        try {
            const id = req.params.id;
            const result = Orders.destroy({
                where: {
                    id: id
                }
            });
            res.redirect("/order/orderadmin");
        } catch (error) {
            console.log(error.message);
        }
    }
}
