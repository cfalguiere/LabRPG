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

    this.playCell = function (cell) {
      if (selectedCell === null) {
        if (cell.state === 'placed') {
          cell.state = 'selected';
          selectedCell = cell;
        }
      } else if (selectedCell !== null) {
        if (cell === selectedCell) {
          cell.state = 'placed';
          selectedCell = null;
        } else {
          if (match(cell, selectedCell)) {
            selectedCell.state = 'removed';
            cell.state = 'removed';
            selectedCell = null;
          } else {
            selectedCell.state = 'placed';
            cell.state = 'selected';
            selectedCell = cell;
          }
        }
      }
    };


    this.getSelectedCell = function () {
      return selectedCell;
    };

    this.isCompleted = function () {
      var completed = board.reduce( function(acc, row) {
        var lineCompleted = row.reduce( function(acc, cell) {
          return acc && cell.state === 'removed';
        }, true);
        return acc && lineCompleted;
      }, true);
      return completed;
    };

  });
