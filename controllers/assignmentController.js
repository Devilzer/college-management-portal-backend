const Assignment = require("../models/assignments");

module.exports.createAssignment =  async(req,res)=>{
    try {
        let assignment = new Assignment;
        assignment.teacher = req.body.teacher;
        assignment.title = req.body.title;
        assignment.description = req.body.description;
        assignment.deadline = req.body.deadline
        
    } catch (error) {
        return res.status(400).json({
            message:error
        });
    }
};