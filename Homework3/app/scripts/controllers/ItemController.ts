/**
 * Created by andrew on 14.03.14.
 */
/// <reference path='../refs.ts'/>

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    export interface IItemScope extends ng.IScope {
        model: ItemController;
    }

    export class ItemController {

        private static $inject = ['$scope', 'ProductService', '$routeParams'];

        public item: m.ProductModel;
        public idd;
        public showSearchForm: boolean;

        constructor(private $scope: IItemScope,
                    private productService: s.IProductService,
                    private $route) {
            this.$scope.model = this; //все public-свойства доступны для view
            this.idd = this.$route.id;
            this.productService.getItem(this.idd)
                .then((product) => this.item = product);
            this.showSearchForm = false;

        }
    }

    angular.module('auction').controller('ItemCtrl', ItemController);
}
