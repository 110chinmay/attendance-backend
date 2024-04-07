const express = require("express");
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;
  console.log("email",email);
    const EmployeeDetails = await db.EmployeeDetails.findOne({ where: { email } });

    if (!EmployeeDetails) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, EmployeeDetails.password);

    console.log("passwordMatch",passwordMatch);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const { firstname, lastname, emp_id, organization } = EmployeeDetails;
    return res.status(200).json({firstname, lastname, emp_id, email, organization});
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;