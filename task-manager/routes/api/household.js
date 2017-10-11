const router = require("express").Router();
const householdsController = require("../../controllers/householdsController");

router.route("/")
    .get(householdsController.findAll)
    .post(householdsController.create);

module.exports = router;