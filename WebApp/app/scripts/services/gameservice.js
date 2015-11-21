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

    function match(cell1, cell2) {
        return cell1.id !== cell2.id && cell1.card.id === cell2.card.id;
    }

    this.reset = function() {
      board = Boardservice.deal();
    };

    this.getBoard = function() {
      return board;
    };

    this.playCell = function (cell) {
        if (cell.state === 'placed') {
            cell.state = 'completed';
         } else {
            cell.state = 'placed';
        }
    };

    this.isCompleted = function () {
      var completed = board.reduce( function(acc, row) {
        var lineCompleted = row.reduce( function(acc, cell) {
          return acc && cell.state === 'completed';
        }, true);
        return acc && lineCompleted;
      }, true);
      return completed;
    };

  });
