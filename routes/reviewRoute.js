const express = require("express");
const reviewController = require("../controllers/ReviewController");
const router = express.Router();

router.post("/", reviewController.writeReview);
router.route("*", (req, res) => {
  res.status(404).send("Not found");
});
module.exports = router;
