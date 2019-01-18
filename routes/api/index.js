const router = require("express").Router();
const birderRoutes = require("./birders");


// Birder routes
router.use("/birders", birderRoutes);
router.use('/emailroute', require('./emailroute'));
router.use('/users', require('./users'));

module.exports = router;
