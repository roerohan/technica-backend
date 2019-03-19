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
    medicines:Object
});

/*
Fields: name of medicine,
start date,
end date,
time of the day
*/
module.exports = mongoose.model('Prescription', prescriptionSchema);
