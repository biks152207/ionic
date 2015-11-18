(function(){
  'use strict';
  var Category = function($scope,productLists, $stateParams){
    var category = this;
    category.getLists = function(){
      category.lists = productLists.getProducts();
    }
    category.getLists();

    category.categoryItem = [category.lists[$stateParams.id]]

  }
  angular.module('starter')
    .controller('categoryCtrl', [
      '$scope',
      'productLists',
      '$stateParams',
      Category
    ])

})();