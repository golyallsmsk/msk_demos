(function () {
  "use strict";

  angular.module("appILOMS").directive("addDirective", addDirective);

  /** @ngInject */
  function addDirective() {
    return {
      template: "Add {{result}}",
    };
  }
})();
