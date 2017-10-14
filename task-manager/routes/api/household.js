const router = require("express").Router();
const householdsController = require("../../controllers/householdsController");

router.route("/")
    .get(householdsController.findAll)
    .post(householdsController.create);

router.route("/:id")
    .get(householdsController.findById)
    .put(householdsController.update)
    .delete(householdsController.remove);

module.exports = router;