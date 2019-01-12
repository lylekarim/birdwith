const router = require("express").Router();
const birdersController = require("../../controllers/birdersController");


// Matches with "/api/birders"
router.route("/")
  .get(birdersController.findAll)
  .post(birdersController.create);
  

// Matches with "/api/birders/:id"
router
  .route("/:id")
  .get(birdersController.findById)
  .put(birdersController.update)
  .delete(birdersController.remove);

module.exports = router;
