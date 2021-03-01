# AngularJS Notes

ngRoute, ngMessages, ngSanitize, ngAnimate, ui.bootstrap, rzModule

angular.module("app")
        .controller("Ctrl", function() {})
        .directive("Drtv", function () {})
        .config()
        .constant("config", {})
        .provider("provider", function () {})
        .factory("factory", function() {})
        .service("service", function() {})
        .animation(".animation", function() {})
        .filter("filter", function() {})

angular.module("appIloms", []);
angular.module("appIloms").controller("MainController", MainController);
function MainController($scope) {}

angular.module("appIloms").constant("relationship", {
    spouse : "Spouse/Partner",
    father: "Father",
    mother: "Mother",
    parent: "Parent",
    getParents: function () {
        return [this.father, this.mother, this.parent]
    }
    getParent: function(isMale) {
        return (isMale === 0) ? this.father : this.mother;
    }
})

Directives

used in HTML
ng-app
ng-controller
ng-repeat
ng-if
ng-show
ng-hide
ng-disabled
ng-checked
ng-click
ng-change
ng-class

Services

Controller

Built-in Services
$scope -  $scope.$on, $scope.$watch, $scope.$emit, $scope.$watchcollection, $scope.$apply
$rootScope - $rootScope.$on, $rootScope.$broadcast

$http
$q
$promise

$location - service parses the URL in the browser address bar
$filter - filters are used for formatting data displayed to the user
$translate
$injector
$inject

$window
$document
$interval - angular wrapper for window.setInterval
$timeout - angular wrapper for window.setTimeout

$templateCache

$uibModal
$uibModalInstance

ngCookies - module provides a convenient wrapper for reading and writing browser cookies
$cookies - Provides read/write access to browsers cookies
$cookieStore - Provides key-value storage that is backed by session cookies

$route - used for deep-linking URLs to controllers and views(HTML Partials). It watches $location.url() and tries to map to and existing route definition.
$routeParams
$routeProvider - Used for configuring Routes

$element
$attrs
$type
$error
