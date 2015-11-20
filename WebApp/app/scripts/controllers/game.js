'use strict';

/**
 * @ngdoc function
 * @name labrpgApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the labrpgApp
 */
angular.module('labrpgApp')
  .controller('GameCtrl', function ($scope, Gameservice) {

    Gameservice.reset();
    $scope.board = Gameservice.getBoard();

    $scope.completed = false;
    $scope.selectedCell = null;

    $scope.playCell = function (cell) {
      /*
        cell.state = 'removed';
      */
      Gameservice.playCell(cell);
      $scope.completed = Gameservice.isCompleted();
      $scope.selectedCell = Gameservice.getSelectedCell();
    };
  });
