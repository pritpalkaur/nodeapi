'use strict';
const { Zilliqa } = require('@zilliqa-js/zilliqa');
 
//Calling walletData service 
var walletData  = require('C:\\Users\\pritp\\Documents\\Web-based-zilliqa-wallet\\services\\ZilliqaService.js');

exports.GetBalanceByAddress = function(req, res) {
  let wData = new walletData();
  var address= 'zil1tyu0ezhcyfg26m83mgamjt625qzukfcht8es69'; 
  //var address='zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz';
  var promise = wData.GetBalanceByAddress(address)
  promise.then(function(result) {
    console.log(result); 
    res.json(result);
  })

};

exports.GetSmartContractState = function(req, res) {
  let wData = new walletData();
 // var address='zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz';
 var address='zil1tyu0ezhcyfg26m83mgamjt625qzukfcht8es69';
  var promise= wData.GetSmartContractState(address)
  promise.then(function(result) {
    console.log(result); 
    res.json(result);
  })
};
exports.GetRecentTransactionsByAddress = function(req, res) {
  let wData = new walletData();
  var address='zil1tyu0ezhcyfg26m83mgamjt625qzukfcht8es69';
  var promise= wData.GetRecentTransactionsByAddress()
  promise.then(function(result) {
    //console.log(result); 
    res.json(result);
  })
};
exports.GetRecentTransactions = function(req, res) {
  let wData = new walletData();
  var promise= wData.getRecentTransactions();
  promise.then(function(result) {
    //console.log(result); 
    res.json(result);
  })
};

exports.GetSmartContractInit = function(req, res) {
  let wData = new walletData();
  var address='zil1tyu0ezhcyfg26m83mgamjt625qzukfcht8es69';
  var promise= wData.getSmartContractInit(address);
  promise.then(function(result) {
    //console.log(result); 
    res.json(result);
  })
};
exports.GetNumTransactions = function(req, res) {
  let wData = new walletData();
  var promise= wData.GetNumTransactions();
  promise.then(function(result) {
    console.log(result); 
    res.json(result);
  })
};
