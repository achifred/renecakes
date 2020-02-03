import cloudinary from "cloudinary";
export class Work {
    getWork = async (req: any, res: any) => {
        res.render("work");
    };

    async addwork(req: any, res: any) {
        try {
            //const picture = req.file.path;
            console.log(req.file);
            //const result = await cloudinary.v2.uploader.upload(picture);
            //console.log(result);
            console.log("okay");
            res.redirect("/works/workadmin");
        } catch (error) {
            console.log(error);
        }
    }
}
