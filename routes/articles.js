const router = require("express").Router();
const articlesController = require("../controllers/articlesController");


router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

 router.route("/saved")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

 router
  .route("/saved/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
