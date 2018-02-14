const router = require("express").Router();
const communityController = require("../controllers/communityController");

// Matches with "/api/books"
router.route("/images")
  .get(communityController.findAll);
  // .post(booksController.create);

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
