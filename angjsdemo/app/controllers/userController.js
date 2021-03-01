(function () {
  "use strict";

  angular.module("appILOMS").controller("UserController", UserController);

  /** @ngInject */
  function UserController($scope, UserService) {
    var vm = this;
    $scope.userName = "User";
    $scope.usadd = UserService.add(4, 3);
    $scope.ussub = UserService.subtract(4, 3);
    $scope.usmul = UserService.multiply(4, 3);
    $scope.result = UserService.multiply(5, 3);
    init();
    $scope.$on("ccsubmit", function () {
      //   UserService.setUserName($scope.userName);
      console.log("CC sumbitted");
    });
    function init() {}
  }
})();
