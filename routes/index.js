const express = require("express");
const router = express();

router.use("/user",require("./user"));
router.use("/assignment",require("./assignment"));


module.exports = router;