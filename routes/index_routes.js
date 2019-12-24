const express = require("express");
const router = express.Router();

const ctrlUser = require("../Controllers/userController");

router.post("/Register", ctrlUser.Register);

module.exports = router;
