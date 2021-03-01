(function () {
  "use strict";

  angular.module("appILOMS").controller("MainController", MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, APP_VERSION, LOGIN_CONFIG) {
    var vm = this;
    $scope.message = "Main Controller 1";
    $scope.version = APP_VERSION;
    $scope.loginUrl = LOGIN_CONFIG.BASE_URL.APP;
    $scope.loginApi = LOGIN_CONFIG.BASE_URL.API;
    $rootScope.userNameRS = "Srikanth RS";
    init();

    function init() {}
  }
})();
