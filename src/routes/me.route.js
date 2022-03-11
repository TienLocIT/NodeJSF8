const express=require("express");
const SortMiddleWare=require("../app/middlewares/sort.middleware")
const router=express.Router();
const meController=require("../app/controllers/me.controller");
router.get("/courses/stored",SortMiddleWare,meController.storedCourses);
router.post("/courses/stored",SortMiddleWare,meController.sortCourseColumn);
router.get("/courses/trash",meController.trashCourses);
module.exports=router;