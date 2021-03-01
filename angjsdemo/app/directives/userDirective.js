(function () {
  "use strict";

  angular.module("appILOMS").directive("userDirective", userDirective);

  /** @ngInject */
  function userDirective() {
    function ndController($scope) {
      $scope.user = {
        name: "Luke Skywalker",
      };
    }
    return {
      bindToController: true,
      controller: ndController,
      restrict: "AE",
      template: "Name: {{ user.name }} ",
      scope: true,
    };
  }
})();
