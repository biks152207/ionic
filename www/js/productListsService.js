(function(){
  'use strict';
  var products = function(){
    var _lists = [
      {
        "id": "1",
        "name": "Steve",
        "image": "http://evermadetraders.com/images/test/F.Eng-01.JPG",
        "category": "ENGRAVED HANDMADE KNIVES",
        "price": "1"

      },
      {
        "id": "2",
        "name": "Jobs",
        "image": "http://evermadetraders.com/images/test/F.eng-02.jpg",
        "category": "ENGRAVED HANDMADE KNIVES",
        "description": "This example could be incredible if it used a clear practical example",
        "price": "2"
      },
      {
        "id": "3",
        "name": "Bill",
        "image": "http://evermadetraders.com/images/test/SP-01.jpg",
        "category": "DMASCUS HANDMADE FANCY HUNTING KNIVES",
        "description": "This example could be incredible if it used a clear practical example"
      },
      {
        "id": "4",
        "name": "Gates",
        "image": "http://evermadetraders.com/images/test/SP-02.jpg",
        "category": "DMASCUS HANDMADE FANCY HUNTING KNIVES",
        "description": "This example could be incredible if it used a clear practical example",
        "price": "500"
      },
      {
        "id": "5",
        "name": "Steven",
        "image": "http://evermadetraders.com/images/test/SP-01.jpg",
        "category": "DAMASCUS HANDMADE KUKRI KNIVES",
        "description": "This example could be incredible if it used a clear practical example",
        "price":"100"
      },
      {
        "id": "6",
        "name": "Hawkings",
        "image": "http://evermadetraders.com/images/test/SP-03.jpg",
        "category": "DAMASCUS HANDMADE KUKRI KNIVES",
        "description": "This example could be incredible if it used a clear practical example",
        "price":"100"

      },
      {
        "id": "7",
        "name": "Beatles",
        "image": "http://evermadetraders.com/images/test/DGR-01.jpg",
        "category": "DAMASCUS HANDMADE DAGGER KNIVES",
        "description": "This example could be incredible if it used a clear practical example",
        "price":"100"
      },
      {
        "id": "8",
        "name": "Albert",
        "image": "http://evermadetraders.com/images/test/DGR-05.JPG",
        "category": "DAMASCUS HANDMADE DAGGER KNIVES",
        "description": "This example could be incredible if it used a clear practical example",
        "price":"100"
      },
      {
        "id": "9",
        "name": "Einstein",
        "image": "http://evermadetraders.com/images/test/FIRE.jpg",
        "category": "DAMASCUS BARS",
        "description": "This example could be incredible if it used a clear practical example",
        "price":"100"
      },
      { 
        "id": "10",
        "name": "Rain Drop",
        "image": "http://evermadetraders.com/images/test/Rain%20Drop.jpg",
        "category": "DAMASCUS BARS",
        "description": "This example could be incredible if it used a clear practical example",
        "price":"100"
      }

    ]
    return {
        getProducts: function(){
          return _lists;
        }
      }
  }
  angular.module('starter')
    .factory('productLists',[
      products
    ])

})();