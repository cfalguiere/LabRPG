'use strict';

/**
 * @ngdoc filter
 * @name labrpgApp.filter:renderCard
 * @function
 * @description
 * # renderCard
 * Filter in the labrpgApp.
 */
angular.module('labrpgApp')
  .filter('renderCard', function () {
    return function(cell) {
      //return 'glyphicon glyphicon-heart card card-placed card-red';
      return 'glyphicon glyphicon-' + cell.card.shape + ' card card-' + cell.state + ' card-' + cell.card.color;
    };
  });
