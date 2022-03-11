const Courses=require("../models/courses.model")
class SiteController{
    index(req,res,next){
        Courses.find()
        .then(courses=>{
            res.render("home",{
                courses,
                extractScripts: true
            })
        })
        .catch(next)
    }
    search(req,res,next){
        res.render("search",{
            extractScripts: true
        })
    }
    news(req,res,next){
            res.render("news",{
                extractScripts: true
            })
    }
}
module.exports=new SiteController;