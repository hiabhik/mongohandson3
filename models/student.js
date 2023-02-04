const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: String,
    department: String,
    lastCompany: String,
    lastSalary: String,
    overallExp: String,
    contactInfo: String,
    yearGrad: String,
    gradStream: String
})

const Student = mongoose.model("student", studentSchema);

module.exports ={Student}