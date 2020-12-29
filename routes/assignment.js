const express = require("express");
const router = express();
const assignmentController = require("../controllers/assignmentController");

router.post("/create",assignmentController.createAssignment);
router.get("/getall",assignmentController.allAssignments);

module.exports = router;