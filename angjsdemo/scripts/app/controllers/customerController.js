(function () {
  "use strict";

  angular
    .module("appILOMS")
    .controller("CustomerController", CustomerController);

  function CustomerController($scope, UserService) {
    var vm = this;
    $scope.name = "Srikanth";
    UserService.setUserName($scope.name);
    $scope.usadd = UserService.add(40, 30);
    $scope.ussub = UserService.subtract(40, 30);
    $scope.usmul = UserService.multiply(40, 30);
    init();
    $scope.$on("ccsubmit", function () {
      //   UserService.setUserName($scope.userName);
      console.log("CC sumbitted");
    });
    $scope.$on("submit", submit);
    $scope.submit = submit;

    function submit() {
      console.log("Submitted");
    }
    function init() {}
  }
})();
