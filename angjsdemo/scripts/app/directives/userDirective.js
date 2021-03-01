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
      controller: ndController,
      restrict: "E",
      template: "Name: {{ user.name }} ",
    };
  }
})();
