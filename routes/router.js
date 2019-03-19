var express = require("express");

const app = express();
var Patient = require("../models/patient");
var Doctor = require("../models/doctor");
var Prescription = require("../models/prescription")

const router = express.Router();

var user = "testUser"
var pass = "testPass"
router.post("/login", function (req, res) {
    const name = req.body.name.toString();
    const password = req.body.password.toString();

    if (name == user && password === pass) {
        res.json({"success": 1});
    } else {
        res.json({"success": 0});
    }

});

router.post("/get-patient", async function(req,res){
    var patient_id = req.body.patient_id.toString();
    try{
        var patient = await Patient.findById(patient_id).exec();
        patient.password = "";
        var prescriptions = await Prescription.find({"participant_id":participant_id}).lean().exec();
        patient.prescriptions = prescriptions;
        res.json(patient);
    }
    catch(e){
        res.json({"success": 0});
    }

});

router.post("/register/doctor", (req,res)=>{
    let doctor = new Doctor();
    doctor.name = req.body.name.toString();
    doctor.password = req.body.password.toString();
    doctor.verification_id = req.body.verification_id.toString();
    try{
        let doc = await doctor.save();
        res.json({"success": 1});
    }
    catch(e){
        res.json({"success": 0});
    }
});

router.post("/register/patient", (req,res)=>{
    let patient = new Patient();
    patient.name = req.body.name.toString();
    patient.password = req.body.password.toString();
    try{
        let pat = await patient.save();
        res.json({"success": 1});
    }
    catch(e){
        res.json({"success": 0});
    }
});

router.post("/prescribe", (req, res)=>{
    let prescription = new Prescription();
    prescription.patient_id = req.body.patient_id;
    prescription.doctor_id = req.body.doctor_id;
    prescription.medicines = req.body.medicines;
    try{
        let pres = await prescription.save();
        res.json({"success": 1});
    }
    catch(e){
        res.json({"success": 0});
    }
});

module.exports = router;
