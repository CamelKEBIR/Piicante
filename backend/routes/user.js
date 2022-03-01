const express = require("express");
const router = express.Router()

const userCtrl = require("../controllers/user");
const checkPassword = require("../middleware/password")
const checkEmail = require("../middleware/email")

router.post("/signup", checkEmail, checkPassword, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;