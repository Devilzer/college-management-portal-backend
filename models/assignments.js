const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
    teacher :{
        type: String,
        required:true,
    },
    title : {
        type: String,
        required:true,
    },
    description : {
        type: String,
        required:true,
    },
    deadline:{
        type: Date,
        required:true
    },
    submittedBy : {
        type : Array
    }
});

const Assignment = mongoose.model("Assignment",assignmentSchema);
module.exports = Assignment;