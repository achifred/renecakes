import Siteinfo from "../model/Siteinfo";

export class Contact {
    getContact = async (req: any, res: any) => {
        const result = await Siteinfo.findAll();
        const data = {
            result: result.map(item => {
                return {
                    email: item.email,
                    phone: item.phone,
                    address: item.address
                };
            })
        };
        res.render("contact", { result: data.result });
    };
}
