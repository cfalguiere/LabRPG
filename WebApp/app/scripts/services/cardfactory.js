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
       this.reachable = false;
       this.visible = false;
    }

    var colors = [ 'cyan', 'green', 'blue', 'orange', 'purple', 'pink', ];
    var shapes = [ 'heart', 'star', 'music', 'cloud', 'flag', 'headphones' ];

    var i = 1;
    var cards = LabFactory.map(function(lab){
      return new Card(i++, lab.theme, 'cyan', lab);
    });

    cards[0].visible = true;
    cards[1].visible = true;
    cards[2].visible = true;
    cards[3].visible = true;
    cards[4].visible = true;
    cards[5].visible = true;
    cards[6].visible = true;
    cards[7].visible = true;
    cards[8].visible = true;
    cards[9].visible = true;
    cards[10].visible = true;
    cards[11].visible = true;

    return cards;
  });
