const router = require("express").Router();
const userRoutes = require("./user");
const householdRoutes = require("./household");
const taskRoutes = require('./task')

router.use("/users", userRoutes);

router.use("/households", householdRoutes);

router.use("/tasks", taskRoutes);

module.exports = router;