const express = require("express");
const router = express();
const userController = require("../controllers/userController");

router.post("/signup",userController.userRegister);
router.post("/signin",userController.userLogin);
module.exports = router;