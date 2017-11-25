// TODO: define controller routes and actions using express router
const express = require("express");
const router = express.Router();

router.post("/user", require("./user").create);

module.exports = router;
