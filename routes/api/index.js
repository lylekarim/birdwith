const router = require("express").Router();
const birderRoutes = require("./birders");


// Birder routes
router.use("/birders", birderRoutes);
router.use('/email', require('./emailroute'));



module.exports = router;
