(function(){
  'use strict';
  var menu = function($scope, $location, productLists){
    var menu = this;
    menu.search = null;
    menu.products = productLists.getProducts();
    menu.getEachCateogry = function(id){
      $location.url('/home/'+ id );
    }

  }

  angular.module('starter')
    .controller('menuController',[
      '$scope',
      "$location",
      'productLists',
      menu
    ])

})();