'use strict';
module.exports = function(app) {
  var contractList = require('../controllers/contractListController');
 
  // contractList Routes
 // app.route('/contracts/GetBalances').get(contractList.GetBalances);

  // // // contractList Routes
  app.route('/contracts/GetBalanceByAddress').get(contractList.GetBalanceByAddress);

  // // contractList Routes
  app.route('/contracts/GetSmartContractState').get(contractList.GetSmartContractState);

      // // contractList Routes
 app.route('/contracts/GetRecentTransactions').get(contractList.GetRecentTransactions);

    // // contractList Routes
 app.route('/contracts/GetRecentTransactionsByAddress').get(contractList.GetRecentTransactionsByAddress);


  //  // contractList Routes
  app.route('/contracts/GetSmartContractInit').get(contractList.GetSmartContractInit);
       // // contractList Routes
  app.route('/contracts/GetNumTransactions').get(contractList.GetNumTransactions);



  // app.route('/contract/:id')
  //   .get(contractList.read_a_contract)
  //   .put(contractList.update_a_contract)
  //   .delete(contractList.delete_a_contract);
};
