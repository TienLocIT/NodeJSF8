const courseModel=require("../models/courses.model")
class MeController{
    storedCourses(req,res,next){
        Promise.all([courseModel.find({ }),courseModel.countDeleted()])
        .then(([courses,deletedCourseCount])=>{ //[courses,deletedCourse] Destructing
            res.render("me/stored-courses",{
                extractScripts: true,
                courses,
                deletedCourseCount,
                numberCourse:courses.length
            })
        })
        .catch(next)
    }
    sortCourseColumn(req,res,next){
        
        const courses=courseModel.find({}).sort(
            {
                [req.body.column]:req.body.type
            }
        )
        Promise.all([courses,courseModel.countDeleted()])
        .then(([courses,deletedCourseCount])=>{ //[courses,deletedCourse] Destructing
            res.render("me/stored-courses",{
                extractScripts: true,
                courses,
                deletedCourseCount,
                numberCourse:courses.length
            })
        })
        .catch(next)
    }
    trashCourses(req,res,next){
        courseModel.findDeleted({})
        .then((courses)=>{
            res.render("me/trash-course",{
                extractScripts: true,
                courses,
                numberCourseDeleted:courses.length
            })
        })
    }
    // editCourse(req,res,next){
    //     courseModel.updateOne({_id:req.params.id},req.body)
    //     .then(()=>{
    //         res.redirect("me/courses/stored");
    //     })
    //     .catch(next)
    // }
}
module.exports=new MeController;