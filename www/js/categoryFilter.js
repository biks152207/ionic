// (function(){
//   'use strict';
//   var filter = function(productLists){
//     var lists = productLists.getProducts();
//     return function(value){
//       console.log(value);
//       var filtered = [];
//       if (value){
//         for (var i = 0; i < lists.length; i++){
//           if (lists[i].name.toLowercase() == value.toLowercase()){
//             filtered.push(lists[i]);
//           }
//         }
//       }
//       return filtered;
//     }
//   }
//   angular.module('starter')
//     .filter('searchByCategory',[
//       'productLists',
//       filter
//     ])

// })();