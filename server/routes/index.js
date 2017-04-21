const express = require('express'),
      router = express(),
      controller = require("../controllers/product");

router.use("/", (req, res) => {
  console.log("Index for guest");
})

module.exports = router
