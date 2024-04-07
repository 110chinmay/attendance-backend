const {Router} = require("express");

const route = Router()

route.use("/",require("../../controllers/employeeAttendanceDetails"));
route.use("/",require("../../controllers/employeeDetails"));
route.use("/",require("../../controllers/loginDetails"));

module.exports = route;