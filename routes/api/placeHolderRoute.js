const router = require("express").Router();
// // const yourController = require("../../controllers/yourController");

// // // Matches with "/api/yourController"
// router.route("/")
//   .get(yourController.findAll)
//   .post(yourController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(yourController.findById)
//   .put(yourController.update)
//   .delete(yourController.remove);

  router.post('/previewImage', function(req, res){
    let image = req.body;
    res.send(image);
  })
module.exports = router;
