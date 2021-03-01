(function () {
  "use strict";

  angular.module("appILOMS").directive("userUrlDirective", userUrlDirective);

  /** @ngInject */
  function userUrlDirective() {
    function userUrlDirectiveController($scope) {
      var vm = this;
      init();
      function init() {}
      $scope.user = {
        name: "Rye Skywalker",
        address: {
          street: "PO Box 123",
          city: "Secret Rebel Base",
          planet: "Yavin 4",
        },
        friends: ["Han", "Leia", "Chewbacca"],
      };
    }

    function link() {}

    return {
      bindToController: true,
      controller: userUrlDirectiveController,
      controllerAs: "Ctrl",
      link: link,
      restrict: "AE",
      templateUrl: "./scripts/app/directives/UserUrlDirective.html",
    };
  }
})();
