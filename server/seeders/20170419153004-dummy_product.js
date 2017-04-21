'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Products",
      [{
        id_product: "L-001",
        product_name: "Kabel Data iPhone 7 Original",
        description: "Kabel data iPhone 7 original import langsung dari pabrik Apple",
        photo: "http://ecx.images-amazon.com/images/I/51aiX-EGg1L._SL1024_.jpg",
        price: "500000",
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {}
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete(
      "Products",
      null,
      {}
    )
  }
};
