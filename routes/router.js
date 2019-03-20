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

    if (name === user && password === pass) {
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
        var prescriptions = await Prescription.find({"patient_id":patient_id}).lean().exec();
        patient.prescriptions = prescriptions;
        res.json(patient);
    }
    catch(e){
        res.json({"success": 0});
    }

});

router.post("/register/doctor", async (req,res)=>{
    let doctor = new Doctor();
    doctor.name = req.body.name.toString();
    doctor.password = req.body.password.toString();
    doctor.email = req.body.email.toString();
    doctor.verification_id = req.body.verification_id.toString();
    try{
        let doc = await doctor.save();
        res.json({"success": 1});
    }
    catch(e){
        res.json({"success": 0, "error": e});
    }
});

router.post("/register/patient", async (req,res)=>{
    let patient = new Patient();
    patient.name = req.body.name.toString();
    patient.password = req.body.password.toString();
    patient.email = req.body.email.toString();

    try{
        await patient.save();
        res.json({"success": 1});
    }
    catch(e){
        res.json({"success": 0});
    }
});

router.post("/prescribe", async (req, res)=>{
    let prescription = new Prescription();
    prescription.patient_id = req.body.patient_id;
    prescription.doctor_id = req.body.doctor_id;
    prescription.medicines = req.body.medicines;
    try{
        await prescription.save();
        res.json({"success": 1});
    }
    catch(e){
        res.json({"success": 0});
    }
});

module.exports = router;
