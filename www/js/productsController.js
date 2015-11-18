(function(){

  var Products = function($scope, productLists){
    var product = this;

    product.getLists = function(){
      product.lists = productLists.getProducts();
    }
    product.getLists();

    $scope.$watch('menu.search', function(newValue, oldValue){

      if (newValue){

        var filtered = [];
        for (var i = 0; i < product.lists.length; i++){
          if (product.lists[i].category.toLowerCase().startsWith(newValue.toLowerCase())){
            filtered.push(product.lists[i]);
          }
        }
        if(filtered.length){
          product.lists = filtered;
        }else{
          product.lists = productLists.getProducts();
        }
      }else{

        product.lists = productLists.getProducts();

      }
    });
  }
  'use strict';
  angular.module('starter')
    .controller('productsCtrl',[
      '$scope',
      'productLists',
      Products
    ])

})();