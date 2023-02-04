const express=require("express");
const router = express.Router();
const studentController = require("../controllers/student");

router.get('/student', studentController.getStudentData);
router.get('/Q2', studentController.getQ2Data);
router.get('/Q3', studentController.getQ3Data);
router.get('/Q4', studentController.getQ4Data);
router.delete('/Q6', studentController.deleteQ6Data);

router.post('/student', studentController.saveStudentData);
router.post('/Q1', studentController.saveManyStudentData);

router.put('/student', studentController.updateStudentData);

router.delete('/student', studentController.deleteStudentData);



module.exports = router;