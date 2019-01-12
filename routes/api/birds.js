const router = require("express").Router();
const birdsController = require("../../controllers/birdsController");


// Matches with "/api/birds"
router.route("/")
  .get(birdsController.findAll)
  .post(birdsController.create);
  

// Matches with "/api/birds/:id"
router
  .route("/:id")
  .get(birdsController.findById)
  .put(birdsController.update)
  .delete(birdsController.remove);

module.exports = router;
