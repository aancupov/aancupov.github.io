/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (controllers) {
        'use strict';

        var MainController = (function () {
            function MainController($scope, $http) {
                $scope.handleItemsLoaded = function (data, status) {
                    $scope.items = data;
                };
                $scope.handleSearchItemsLoaded = function (data, status) {
                    $scope.searchItems = data;
                };

                $scope.handleError = function (data, status) {
                    //console.log(status);
                };

                $scope.search = function () {
                    $scope.showHome = false;
                    $scope.showSearchResult = true;
                    $http.get($scope.urlSearchItems).success($scope.handleSearchItemsLoaded).error($scope.handleError());
                };

                $scope.home = function () {
                    $scope.showHome = true;
                    $scope.showSearchResult = false;
                    $http.get($scope.urlItems).success($scope.handleItemsLoaded).error($scope.handleError());
                };

                $scope.urlItems = "assets/data/items.json";
                $scope.urlSearchItems = "assets/data/search_items.json";
                $scope.items = [];
                $scope.searchItems = [];
                $scope.home();
            }
            MainController.$inject = ['$scope', '$http'];
            return MainController;
        })();
        controllers.MainController = MainController;

        angular.module('auction').controller('MainCtrl', MainController);
    })(auction.controllers || (auction.controllers = {}));
    var controllers = auction.controllers;
})(auction || (auction = {}));
//# sourceMappingURL=main.js.map
