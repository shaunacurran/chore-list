const router = require("express").Router();
const userRoutes = require("./user");
const householdRoutes = require("./household");

router.use("/users", userRoutes);

router.use("/households", householdRoutes);


module.exports = router;