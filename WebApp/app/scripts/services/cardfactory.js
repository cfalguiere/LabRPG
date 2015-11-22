'use strict';

/**
 * @ngdoc service
 * @name labrpgApp.CardFactory
 * @description
 * # CardFactory
 * Factory in the labrpgApp.
 */
angular.module('labrpgApp')
 .factory('CardFactory', function (LabFactory) {
    // Service logic
    // ...

    function Card(anId, aShape, aColor, aLab) {
       this.id = anId;
       this.shape = aShape;
       this.color = aColor;
       this.lab = aLab;
       this.completed = false;
    }

    var colors = [ 'cyan', 'green', 'blue', 'orange', 'purple', 'pink', ];
    var shapes = [ 'heart', 'star', 'music', 'cloud', 'flag', 'headphones' ];

    var i = 1;
    var cards = LabFactory.map(function(lab){
      return new Card(i++, 'heart', 'cyan', lab);
    });

    return cards;
  });
