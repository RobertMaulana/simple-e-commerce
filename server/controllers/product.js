const db = require('../models');

let dataProduct = (req, res) => {
  db.Product
    .findAll({})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let createProduct = (req, res) => {
  db.Product
    .create({id_product: req.body.id_product, product_name: req.body.product_name, description: req.body.description, photo: req.body.photo, price: req.body.price, CategoryId: req.body.CategoryId})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let dataProductById = (req, res) => {
  db.Product
    .findOne({where: {id: req.params.id}})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let editProduct = (req, res) => {
  db.Product
    .update(
      {id_product: req.body.id_product, product_name: req.body.product_name, description: req.body.description, photo: req.body.photo, price: req.body.price, CategoryId: req.body.CategoryId},
      {where: {id: req.params.id}}
    )
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let deleteProduct = (req, res) => {
  db.Product
    .destroy({where: {id: req.params.id}})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  dataProduct,createProduct,dataProductById,editProduct,deleteProduct
}
