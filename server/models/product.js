'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    id_product: DataTypes.STRING,
    product_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    price: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};