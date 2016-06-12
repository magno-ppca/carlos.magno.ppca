// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"conversionRate","type":"uint256"}],"name":"convert","outputs":[{"name":"convertedAmount","type":"uint256"}],"type":"function"}],
    binary: "606060405260358060106000396000f36503047dab890250606060405260e060020a600035046396e4ee3d81146024575b6007565b602435600435026060908152602090f3",
    unlinked_binary: "606060405260358060106000396000f36503047dab890250606060405260e060020a600035046396e4ee3d81146024575b6007565b602435600435026060908152602090f3",
<<<<<<< HEAD
    address: "0xcf5034b75a24701de008ab88a44bae7102125270",
=======
    address: "0x02422f87a996d15d45c20d0a3c02b668993562a4",
>>>>>>> a532f0e9812da91f09e32c674b894273eb2abce8
    generated_with: "2.0.9",
    contract_name: "ConvertLib"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ConvertLib = Contract;
  }

})();
