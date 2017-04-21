const express     = require('express'),
      app         = express(),
      bodyParser  = require("body-parser"),
      cors        = require("cors");

// Routes
const index     = require("./routes/index"),
      user      = require("./routes/user"),
      product   = require("./routes/product"),
      order     = require("./routes/order"),
      category  = require("./routes/category");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Use Routes
app.use("/home", index)
app.use("/user", user)
app.use("/product", product)
app.use("/order", order)
app.use("/category", category)

app.listen(3000, () => {
  console.log(`Server connected!`);
})
