'use strict';

/**
 * @ngdoc service
 * @name labrpgApp.CardFactory
 * @description
 * # CardFactory
 * Factory in the labrpgApp.
 */
angular.module('labrpgApp')
 .factory('CardFactory', function () {
    // Service logic
    // ...

    function Card(anId, aShape, aColor) {
       this.id = anId;
       this.shape = aShape;
       this.color = aColor;
    }

    var colors = [ 'cyan', 'green', 'blue', 'orange', 'purple', 'pink', ];
    var shapes = [ 'heart', 'star', 'music', 'cloud', 'flag', 'headphones' ];

    var cards = [];

    var i = 1;
    for (var s = 0; s < shapes.length; s++) {
      for (var c = 0; c < colors.length; c++) {
        cards.push( new Card(i, shapes[s], colors[c]) );
        i++;
      }
    }

    return cards;
  });
