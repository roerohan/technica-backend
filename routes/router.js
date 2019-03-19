var express = require("express");

const app = express();
var Patient = require("../models/patient");
var Doctor = require("../models/doctor");
var Prescription = require("../models/prescription")

const router = express.Router();


module.exports = router;
