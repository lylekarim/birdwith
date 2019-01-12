const router = require("express").Router();
const birdRoutes = require("./birds");


// Bird routes
router.use("/birds", birdRoutes);
router.use('/users', require('./users'));

module.exports = router;
