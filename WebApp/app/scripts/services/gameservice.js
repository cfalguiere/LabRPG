'use strict';

/**
 * @ngdoc service
 * @name labrpgApp.GameService
 * @description
 * # GameService
 * Service in the labrpgApp.
 */
angular.module('labrpgApp')
  .service('Gameservice', function (Boardservice) {

    var board = null;
    var selectedCell = null;

    this.reset = function() {
      board = Boardservice.deal();
      selectedCell = null;
    };

    this.getBoard = function() {
      return board;
    };

    this.getSelectedCell = function() {
      return selectedCell;
    };

    this.playCell = function (cell) {
        if (selectedCell !== null) {
          selectedCell.state = 'placed';
        }
        selectedCell = cell;
        cell.state = 'selected';
    };

    this.completeCell = function (cell) {
        var state = cell.card.completed;
        cell.card.completed = ! state;
        Boardservice.updateVisibleCells();
    };

    this.isCompleted = function () {
      var completed = board.reduce( function(acc, cell) {
           return acc && cell.card.completed;
      }, true);
      return completed;
    };

  });
