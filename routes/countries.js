const express = require("express"); 
const router = express.Router();

const controller = require("../controller/countriesController");

router.get("/", controller.list);

module.exports = router;