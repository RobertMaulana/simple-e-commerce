'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    ProductId: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Order.belongsTo(models.User)
      }
    }
  });
  return Order;
};
