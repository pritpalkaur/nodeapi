'use strict';
module.exports = function(app) {
  var contractList = require('../controllers/contractListController');
 
  // contractList Routes
  app.route('/contracts/GetTotalSupply').post(contractList.list_all_contract);

  // contractList Routes
  app.route('/contracts/GetTotalSupply').post(contractList.list_all_contract);

  // contractList Routes
  app.route('/contracts/GetTokenInfo').post(contractList.list_all_contract);

  // contractList Routes
  app.route('/contracts/GetBalanceByAddress').post(contractList.list_all_contract);

   // contractList Routes
  app.route('/contracts/GetBalance').post(contractList.list_all_contract);

    //.post(contractList.create_a_contract)


  app.route('/contract/:contractId')
    .get(contractList.read_a_contract)
    .put(contractList.update_a_contract)
    .delete(contractList.delete_a_contract);
};