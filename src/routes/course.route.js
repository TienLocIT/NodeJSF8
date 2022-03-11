const express=require("express");
const router=express.Router();
const courseController=require("../app/controllers/course.controller");
router.patch("/:id/restore",courseController.restore)
router.delete("/:id/forceDelete",courseController.forceDelete)
router.put("/:id/update",courseController.update)
router.delete("/:id/delete",courseController.delete)
router.get("/:id/edit",courseController.edit)
router.post("/handle-form-course",courseController.handleFormCourse)
router.get("/create",courseController.create)
router.get("/:slug",courseController.show)
router.post("/store",courseController.store)
module.exports=router;