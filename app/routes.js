'use strict';

angular.module('website')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('home', {
                title: 'Home',
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'ctrl',
                isAuthenticated: false  
            })
            .state('flipkart', {
                title: 'Flipkart',
                url: '/flipkart',
                templateUrl: 'app/flipkart/flipkart.html',
                controller: 'flipkartCtrl',
                controllerAs: 'ctrl',
                isAuthenticated: false
            })
            // .state('inventory', {
            //     title: 'Inventory',
            //     url: '/inventory',
            //     templateUrl: 'app/inventory/inventory.html',
            //     controller: 'inventoryCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('items', {
            //     title: 'Items',
            //     url: '/items',
            //     templateUrl: 'app/items/items.html',
            //     controller: 'itemsCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('locations', {
            //     title: 'Locations',
            //     url: '/locations?zone&warehouse&inventory',
            //     templateUrl: 'app/locations/locations.html',
            //     controller: 'locationsCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('putaway', {
            //     title: 'Putaway',
            //     url: '/putaway',
            //     templateUrl: 'app/putaway/putaway.html',
            //     controller: 'putawayCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('warehouses', {
            //     title: 'Warehouses',
            //     url: '/warehouses',
            //     templateUrl: 'app/warehouses/warehouses.html',
            //     controller: 'warehousesCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('zones', {
            //     title: 'Zones',
            //     url: '/zones',
            //     templateUrl: 'app/zones/zones.html',
            //     controller: 'zonesCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('orders', {
            //     title: 'Orders',
            //     url: '/orders',
            //     templateUrl: 'app/orders/orders.html',
            //     controller: 'ordersCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('pickList', {
            //     title: 'PickList',
            //     url: '/pickList',
            //     templateUrl: 'app/pickList/pickList.html',
            //     controller: 'pickListCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
            // .state('pickListDetail', {
            //     title: 'PickList',
            //     url: '/pickListDetail/:id',
            //     templateUrl: 'app/pickList/pickListDetail.html',
            //     controller: 'pickListDetailCtrl',
            //     controllerAs: 'ctrl',
            //     isAuthenticated: false
               
            // })
    }]);