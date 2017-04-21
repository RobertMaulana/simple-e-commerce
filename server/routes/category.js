const express = require('express'),
      router = express(),
      controller = require("../controllers/category");

router.get("/", controller.dataCategory);
router.post("/", controller.createCategory);
router.get("/:id", controller.dataCategoryById);
router.put("/:id", controller.editCategory);
router.delete("/:id", controller.deleteCategory);

module.exports = router
