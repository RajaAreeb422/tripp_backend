const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
  getAllPolls,
  getPollByStatus
} = require("./polls.controller");


const use = fn => (req,res,next)=>
{
    Promise.resolve(fn(req,res,next)).catch(next)
}

// router.get("/:id", use(getJobSeekerById));
router.get("/", use(getAllPolls));
router.get("/:id", use(getPollByStatus));
// ;
 
// router.post("/addSkill", use(addSkill));
// router.post("/updateProfilePicture/:id", upload.single('imageFile'),use(updateProfilePictureById));
// router.post("/account/forgotPassword", use(forgotPassword));
// router.put("/updateProfile/:id", use(updateProfileById));
// router.put("/updateSkill/:id", use(updateSkillById));
// router.put("/account/updatePassword/:id", use(updatePasswordByUserId));

module.exports = router;
