const router = require("express").Router();
const articlesRoutes = require("./articles");

// Articles routes
router.use("/saved", articlesRoutes);

module.exports = router;
