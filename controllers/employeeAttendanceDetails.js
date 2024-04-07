const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for uploaded files

const { EmployeeLoginDetails, EmployeeDetails } = require('../models'); // Assuming your models are exported from the models/index.js file

// GET all employee login details
router.get('/', async (req, res) => {
  try {
    const employeeLoginDetails = await EmployeeLoginDetails.findAll();
    res.json(employeeLoginDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // GET employee login details by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const employeeLoginDetails = await EmployeeLoginDetails.findByPk(req.params.id);
//     res.json(employeeLoginDetails);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// POST create new employee login details
router.post('/add-employee-attendance', upload.single('photo'), async (req, res) => {
  try {
    console.log("req.body",req.body)
    // const parsedLatLongDetails = JSON.parse(req.body.LatLongDetails)
      const photo = req.file;
      const locationDetails = req.body.CompleteAddress;
      const latLong = req.body.LatLongDetails 
      const userLoginTiming = req.body.TimeDate;
      const emp_id = req.body.emp_id;
    const newEmployeeLoginDetails = await EmployeeLoginDetails.create({ userLoginTiming, locationDetails, latLong, photo, emp_id });
    res.status(201).json(newEmployeeLoginDetails);
  } catch (error) {
    console.log("error",error);
    res.status(400).json({ message: error.message });
  }
});

// PUT update employee login details by ID
router.put('/:id', async (req, res) => {
  try {
    const { userLoginTiming, logOutTiming, locationDetails, latLong, image, emp_id } = req.body;
    const updatedEmployeeLoginDetails = await EmployeeLoginDetails.update({ userLoginTiming, logOutTiming, locationDetails, latLong, image, emp_id }, { where: { id: req.params.id } });
    res.json(updatedEmployeeLoginDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE employee login details by ID
router.delete('/:id', async (req, res) => {
  try {
    await EmployeeLoginDetails.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Employee login details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
