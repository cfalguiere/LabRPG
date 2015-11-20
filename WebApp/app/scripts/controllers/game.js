'use strict';

/**
 * @ngdoc function
 * @name labrpgApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the labrpgApp
 */
angular.module('labrpgApp')
  .controller('GameCtrl', function ($scope/*, Gameservice*/) {

   var colors = [ 'cyan', 'green', 'blue', 'orange', 'purple', 'pink', ];
   var shapes = [ 'heart', 'star', 'music', 'cloud', 'flag', 'headphones' ];
   var cards =   [
      { id: 1, shape: shapes[0], color: colors[0]},
      { id: 2, shape: shapes[1], color: colors[1]},
      { id: 3, shape: shapes[2], color: colors[2]},
      { id: 4, shape: shapes[3], color: colors[3]},
      { id: 5, shape: shapes[4], color: colors[4]},
      { id: 6, shape: shapes[5], color: colors[5]}
    ];
    var boardCards = [  [ 1, 1, 2, 2 ],
                        [ 3, 3, 4, 4 ],
                        [ 5, 5, 6, 6 ]  ];
    var id = 1;
    var cellMapper = function(cardId) {
        return { id: id++, card: cards[cardId-1], state: 'placed' };
    };
    var rowMapper = function(rowCards) {
        return rowCards.map( cellMapper );
    };
    var board = boardCards.map( rowMapper );
    $scope.board = board;

    /*
    Gameservice.reset();
    $scope.board = Gameservice.getBoard();
    */
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
