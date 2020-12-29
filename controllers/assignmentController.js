const Assignment = require("../models/assignments");

module.exports.createAssignment =  async(req,res)=>{
    try { 
        let assignment = new Assignment;
        assignment.teacher = req.body.teacher;
        assignment.title = req.body.title;
        assignment.description = req.body.description;
        assignment.deadline = req.body.deadline;
        assignment.submittedBy = [];
        await assignment.save();
        return res.status(200).json({
            message : "Assignment created"
        });
        
    } catch (error) {
        return res.status(400).json({
            message:error
        });
    }
};