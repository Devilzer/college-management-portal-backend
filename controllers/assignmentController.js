const Assignment = require("../models/assignments");
const Submission = require("../models/submission");

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

module.exports.allAssignments = async(req,res)=>{
    try {   
            const assignments = await Assignment.find({});
            return res.status(200).json({
                assignments : assignments
            });
    } catch (error) {
        return res.status(400).json({
            message:error
        });
    }
};

module.exports.createSubbmition = async (req,res)=>{
    try {
        let subbmission  =  
    } catch (error) {
        return res.status(400).json({
            message:error
        });
    }
}