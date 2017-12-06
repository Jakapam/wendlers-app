// TODO: define controller routes and actions using express router
const express = require("express");
const router = express.Router();
const passport = require("./auth").passport;

//non-protected routes
router.post("/users", require("./users").create);
router.post("/login", require("./users").login);

//Authentication middleware
router.use(passport.authenticate("jwt", { session: false }));

//protected routes
router.get("/users", require("./users").show);
router.patch("/users", require("./users").update);

router.post("/programs", require("./programs").create);
router.get("/programs", require("./programs").show);

router.get("/workouts/:id", require("./workouts").show);

module.exports = router;
