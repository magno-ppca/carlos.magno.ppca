var accounts;
var account;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = value.valueOf();
    var defaultBlock =  web3.eth.coinbase;
   document.getElementById("ddd").innerHTML = defaultBlock;
 
   var accounts = web3.eth.accounts;
   document.getElementById("conta").innerHTML = accounts;

 var numbloco = web3.eth.blockNumber;
 document.getElementById("bloco").innerHTML = numbloco;






  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; veja o log.");
  });
};

function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transação Terminada, CRC Validado!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Erro veja o log.");
  });
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("Existe um erro na conta blockchain.");
      return;
    }

    if (accs.length == 0) {
      alert("Erro cliente ethereum, veja o testrpc esta Iniciado.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshBalance();
  });
}