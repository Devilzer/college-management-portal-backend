const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema({
    teacher : {
        type : String,
        required : true,
    },
    student : {
        type : String,
        required : true,
    },
    pdf : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    marks: {
        type : String,
        default : ""
    },
});

const Submission = mongoose.model("Submission",submissionSchema);
module.exports = Submission;