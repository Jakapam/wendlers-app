// TODO: define controller routes and actions using express router
const express = require("express");
const router = express.Router();
const passport = require("./auth").passport;

//non-protected routes
router.post("/users", require("./users").create);

//Authentication middleware
router.use(passport.authenticate("jwt", { session: false }));

//protected routes
router.patch("/users", require("./users").update);
router.get("/test", require("./users").test);
router.get("/programtest", require("./programs").test);

module.exports = router;
