const mongoose = require('mongoose');

var prescriptionSchema = new mongoose.Schema({
    patient_id:{
        type:String,
        required:true,
        unique:true,
    },
    doctor_id:{
        type:String,
        required:true,
        unique:true,
    },
    timestamp:{
        type:String,
        required:true,
        unique:true,
    },
    medicines:[medicineSchema]
});

var medicineSchema = new mongoose.Schema({
    name:String,
    start:Date,
    end:Date,
    time:String,
})
module.exports = mongoose.model('Prescription', prescriptionSchema);
