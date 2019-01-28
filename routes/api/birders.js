const router = require("express").Router();
const birdersController = require("../../controllers/birdersController");
const loginController = require("../../controllers/loginController");
const path = require("path");

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


// API Routes
// Matches with "/api/birders/signup"
router
  .route("/signup")
  .post(loginController.signUp);


// Matches with "/api/birders/signin"
router
  .route("/signin")
  .post(loginController.signIn);


// Matches with "/api/birders/verify"
router
  .route("/verify")
  .post(loginController.verify);


// Matches with "/api/birders/logout"
router
  .route("/logout")
  .post(loginController.logout);



module.exports = router;
