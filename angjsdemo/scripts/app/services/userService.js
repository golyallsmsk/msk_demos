(function () {
  "use strict";

  angular.module("appILOMS").service("UserService", UserService);

  /** @ngInject */
  function UserService() {
    var userName = "";
    this.getUserName = function () {
      return userName;
    };
    this.setUserName = function (userName1) {
      userName = userName1;
    };

    this.add = function (x, y) {
      return x + y;
    };
    this.subtract = function (x, y) {
      return x - y;
    };
    this.multiply = function (x, y) {
      return x * y;
    };
  }
})();
