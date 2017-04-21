const express = require('express'),
      router = express(),
      controller = require("../controllers/product");

router.get("/", controller.dataProduct);
router.post("/", controller.createProduct);
router.get("/:id", controller.dataProductById);
router.put("/:id", controller.editProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router
