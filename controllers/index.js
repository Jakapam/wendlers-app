// TODO: define controller routes and actions using express router
const express = require("express");
const router = express.Router();

router.get("/test", require("./users").test);
router.post("/users", require("./users").create);

module.exports = router;
