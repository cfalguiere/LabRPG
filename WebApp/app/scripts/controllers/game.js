'use strict';

/**
 * @ngdoc function
 * @name labrpgApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the labrpgApp
 */
angular.module('labrpgApp')
  .controller('GameCtrl', function ($scope, $location, Gameservice) {

    Gameservice.reset();
    $scope.board = Gameservice.getBoard();

    $scope.completed = false;

    $scope.playCell = function (cell) {
      Gameservice.playCell(cell);
      $scope.activeCell = Gameservice.getSelectedCell();
      $location.path('labinfo');
    };
  });
