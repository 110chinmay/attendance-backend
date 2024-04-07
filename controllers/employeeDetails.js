const express = require("express");
const router = express.Router();
const db = require('../models'); 


// Get all users
router.get("/employee-details", async (req, res) => {
    try {
        const users = await db.EmployeeDetails.findAll();
        res.json(users);    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// // Get a single user by id
// router.get("employee-details/:id", async (req, res) => {
//     const userId = parseInt(req.params.id);
//     try {
//         const user = await db.EmployeeDetails.findByPk(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// Create a new user
router.post("/employee-details", async (req, res) => {
    console.log("req.body", req.body);
    const { firstname, lastname, phone_number, email, organization,password } = req.body;
    console.log("firstName",req.body.firstname);
    try {
        const newUser = await db.EmployeeDetails.create({ firstname, lastname, phone_number, email, organization,password });
        res.status(201).json(newUser);
    } catch (error) {
        console.log("error",error);
        res.status(400).json({ message: error.message });
    }
});

// Update a user by id
// router.put("employee-details/:id", async (req, res) => {
//     const userId = parseInt(req.params.id);
//     const { firstname, lastname, phone_number, email, organization, role, status } = req.body;
    
//     try {
//         let user = await db.EmployeeDetails.findByPk(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         user = await user.update({ firstname, lastname, phone_number, email, organization, role, status });
//         res.json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Delete a user by id
// router.delete("employee-details/:id", async (req, res) => {
//     const userId = parseInt(req.params.id);
//     try {
//         const user = await db.EmployeeDetails.findByPk(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         await user.destroy();
//         res.sendStatus(204);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


module.exports = router;
