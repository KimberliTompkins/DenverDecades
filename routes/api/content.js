const router = require("express").Router();
const contentController = require("../../controllers/contentController");

// Matches with "/api/content"
router.route("/")
  .get(contentController.findAll)
  .post(contentController.create);
  
//matches with "/api/content"
//api/content/range?start=1990&end=1999
  router
  .route("/range")
  .get(contentController.findByRange);

// Matches with "/api/content/:id"
router
  .route("/:id")
  .get(contentController.findById)
  .put(contentController.update)
  .delete(contentController.remove);
  



module.exports = router;
