// TODO: define controller routes and actions using express router
const express = require("express");
const router = express.Router();
const passport = require("./auth").passport;

router.post("/users", require("./users").create);

router.use(passport.authenticate("jwt", { session: false }));
router.get("/test", require("./users").test);

module.exports = router;
