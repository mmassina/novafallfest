angular
  .module("donationCustom", [])
  .controller("mainController", function($scope, $http) {
    $scope.amount = [];

    var vm = this;

    vm.libData = {};

    vm.addAmount = function() {
      $http.post("http://novafallfest.com/charge", {
        donationAmount: vm.libData.amount
      });

      vm.libData = {
        donationAmount: vm.libData.amount
      };
    };
  });
