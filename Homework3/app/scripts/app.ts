/**
 * Created by andrew on 12.03.14.
 */

module auction {
    'use strict';

    angular.module('auction', ['ngRoute'])
        .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchCtrl'
                })
                .when('/item:id', {
                    templateUrl: 'views/item.html',
                    controller: 'ItemCtrl'
                });
            }]);
}
