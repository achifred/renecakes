import Siteinfo from "../model/Siteinfo";

export class About {
    async getAbout(req: any, res: any) {
        const result = await Siteinfo.findAll();
        const data = {
            result: result.map(item => {
                return {
                    about: item.about,
                    mission: item.mission
                };
            })
        };
        res.render("about", { result: data.result });
    }

    async getAboutAdmin(req: any, res: any) {
        const result = await Siteinfo.findAll();
        const data = {
            result: result.map(item => {
                return {
                    about: item.about,
                    mission: item.mission,
                    email: item.email,
                    phone: item.phone,
                    address: item.address
                };
            })
        };
        res.render("aboutadmin", {
            layout: "admin",
            result: data.result
        });
    }

    async getSingleAbout(req: any, res: any) {
        const result = await Siteinfo.findAll();
        const data = {
            result: result.map(item => {
                return {
                    about: item.about,
                    mission: item.mission,
                    email: item.email,
                    phone: item.phone,
                    address: item.address,
                    id: item.id
                };
            })
        };
        res.render("editabout", {
            layout: "admin",
            result: data.result
        });
    }
    async updateAbout(req: any, res: any) {
        try {
            const { about, mission, email, phone, address, id } = req.body;
            //console.log(req.body);
            const result = await Siteinfo.update(
                { about, mission, phone, email, address },
                { where: { id: id } }
            );
            if (result != null) {
                res.redirect("/about/aboutadmin");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}
