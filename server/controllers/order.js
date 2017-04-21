const db = require('../models');

let dataOrder = (req, res) => {
  db.Order
    .findAll({})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let createOrder = (req, res) => {
  req.body.cart.forEach((dataOrder) => {
    let productId = dataOrder.id;
    let userId = Number(dataOrder.id);
    db.Order
      .create({
        ProductId: productId,
        total: 1,
        UserId: userId
      })
      .then((result) => {
        // console.log(result);
      })
  })
  res.send("create order done!")
}

let dataOrderById = (req, res) => {
  db.Order
    .findOne({where: {id: req.params.id}})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let editOrder = (req, res) => {
  db.Order
    .update(
      {ProductId: req.body.ProductId, total: req.body.total},
      {where: {id: req.params.id}}
    )
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let deleteOrder = (req, res) => {
  db.Order
    .destroy({where: {id: req.params.id}})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  dataOrder,createOrder,dataOrderById,editOrder,deleteOrder
}
