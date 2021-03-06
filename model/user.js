const mongoose = require('mongoose');
//创建学生集合规则

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [String],
    college: String,
    enterDate: {
        type: Date,
        default: Date.now
    }


})


const Student = mongoose.model('Student', studentSchema);


module.exports = Student;

