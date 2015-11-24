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

    function match(cell1, cell2) {
        return cell1.id !== cell2.id && cell1.card.id === cell2.card.id;
    }

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
        if (selectedCell !=null) {
          selectedCell.state = 'placed'
        }
        selectedCell = cell;
        cell.state = 'selected';
        cell.card.completed = true; //TODO temporaire
     };

    this.isCompleted = function () {
      var completed = board.reduce( function(acc, row) {
        var lineCompleted = row.reduce( function(acc, cell) {
          return acc && cell.card.completed;
        }, true);
        return acc && lineCompleted;
      }, true);
      return completed;
    };

  });
