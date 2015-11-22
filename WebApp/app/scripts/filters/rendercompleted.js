'use strict';

/**
 * @ngdoc filter
 * @name labrpgApp.filter:renderCompleted
 * @function
 * @description
 * # renderCompleted
 * Filter in the labrpgApp.
 */
angular.module('labrpgApp')
  .filter('renderCompleted', function () {
    return function (cell) {
      var state = 'unchecked';
      if (cell.card.completed) state = 'check';
      return 'glyphicon glyphicon-' + state + ' card-green';
    };
  });
