const router = require("express").Router();
const birderRoutes = require("./birders");


// Birder routes
router.use("/birders", birderRoutes);
router.use('/email', require('./emailroute'));
router.use('/users', require('./users'));
router.use('/recentbirds', require('./recentbirds'));

module.exports = router;
