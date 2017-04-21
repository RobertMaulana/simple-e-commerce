const express = require('express'),
      router = express(),
      controller = require("../controllers/order");

router.get("/", controller.dataOrder);
router.post("/", controller.createOrder);
router.get("/:id", controller.dataOrderById);
router.put("/:id", controller.editOrder);
router.delete("/:id", controller.deleteOrder);

module.exports = router
