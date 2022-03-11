const siteRoutes=require("./site.route");
const courseRoutes=require("./course.route");
const meRoutes=require("./me.route");
function route(app){
    app.use("/me",meRoutes)
    app.use("/course",courseRoutes);
    app.use("/",siteRoutes);
}

module.exports=route;