const express = require("express");
const router = express.Router();
const { handleCourse } = require("../controllers/course");

router.get("", handleCourse);

module.exports = router;