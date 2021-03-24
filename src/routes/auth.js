const express = require("express");
const router = express.Router();
const { signup, login, userDetails } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/user", userDetails);

module.exports = router;
