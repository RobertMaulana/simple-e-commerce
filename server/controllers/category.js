const db = require('../models');

let dataCategory = (req, res) => {
  db.Category
    .findAll({})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let createCategory = (req, res) => {
  db.Category
    .create({category_name: req.body.category_name})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let dataCategoryById = (req, res) => {
  db.Category
    .findOne({where: {id: req.params.id}})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let editCategory = (req, res) => {
  db.Category
    .update(
      {category_name: req.body.category_name},
      {where: {id: req.params.id}}
    )
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let deleteCategory = (req, res) => {
  db.Category
    .destroy({where: {id: req.params.id}})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  dataCategory,createCategory,dataCategoryById,editCategory,deleteCategory
}
