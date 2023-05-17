const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/signin", handleUserLogin);

module.exports = router;