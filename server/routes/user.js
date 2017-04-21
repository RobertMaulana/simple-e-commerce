const express = require('express'),
      router = express(),
      helperPassport  = require('../helpers/passport'),
      controller = require("../controllers/user")
      token = require('../helpers/token');

router.get("/", token, controller.dataUser);
router.post("/signup", controller.createUser);
router.post("/signin", helperPassport, controller.signinUser);
router.get("/activation/:code", controller.userActivation);
router.get("/:id", token, controller.dataUserById);
router.put("/:id", token, controller.editUser);
router.delete("/:id", token, controller.deleteUser);

module.exports = router
