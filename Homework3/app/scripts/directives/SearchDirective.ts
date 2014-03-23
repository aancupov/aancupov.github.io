/**
 * Created by andrew on 22.03.14.
 */
/// <reference path='../refs.ts'/>

module auction.directive {
    'use strict';

    function auctionSearchDirective() {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'views/partial/search-form.html'
        };
    }

    angular.module('auction').directive('auctionSearch', auctionSearchDirective);
}
