'use strict';


var mongoose = require('mongoose'),
contract = mongoose.model('contracts');

exports.list_all_contract = function(req, res) {
  contract.find({}, function(err, contract) {
    if (err)
      res.send(err);
    res.json(contract);
  });
};




exports.create_a_contract = function(req, res) {
  var new_contract= new contract(req.body);
  new_contract.save(function(err, contract) {
    if (err)
      res.send(err);
    res.json(contract);
  });
};


exports.read_a_contract = function(req, res) {
  contract.findById(req.params.contractId, function(err, contract) {
    if (err)
      res.send(err);
    res.json(contract);
  });
};


exports.update_a_contract = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.contractId}, req.body, {new: true}, function(err, contract) {
    if (err)
      res.send(err);
    res.json(contract);
  });
};


exports.delete_a_contract = function(req, res) {


  contract.remove({
    _id: req.params.contractsId
  }, function(err, contract) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};