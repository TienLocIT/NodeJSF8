const courseModel = require("../models/courses.model")
class CoursesController {
    show(req, res, next) {  
        courseModel.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render("course/show", {
                    course,
                    extractScripts: true
                })
            })
            .catch(next)
    }
   
    create(req, res, next) {
        res.render("course/create", { extractScripts: true })
    }
    store(req, res, next) {
        courseModel.create(req.body)
            .then(() => {
                res.redirect("/me/courses/stored")
            })
            .catch(next)
    }
    edit(req, res, next) {
        courseModel.findOne({ _id: req.params.id })
            .then((course) => {
                res.render("course/edit", {
                    course,
                    extractScripts: true
                })
            })
            .catch(next)
    }
    update(req, res, next) {
        courseModel.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect("/me/courses/stored")
            })
            .catch(next)
    }
    delete(req, res, next) {
        courseModel.delete({ _id: req.params.id })
            .then(() => {
                res.redirect("/me/courses/stored")
            })
            .catch(next)
    }
    forceDelete(req, res, next) {
        courseModel.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect("/me/courses/trash")
            })
            .catch(next)
    }
    restore(req, res, next) {
        courseModel.restore({ _id: req.params.id })
            .then(() => {
                res.redirect("/me/courses/trash")
            })
            .catch(next)
    }
    handleFormCourse(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                courseModel.delete({ _id: { $in: req.body.courseIds} })
                    .then(() => {
                        res.redirect("/me/courses/stored")
                    })
                    .catch(next)
                    break;
            default:
                break;
        }

    }
}
module.exports = new CoursesController;