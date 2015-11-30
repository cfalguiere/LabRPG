'use strict';

/**
 * @ngdoc service
 * @name labrpgApp.BoardService
 * @description
 * # BoardService
 * Service in the labrpgApp.
 */
angular.module('labrpgApp')
  .service('Boardservice', function (CardFactory) {

    function Cell(anId, aCard) {
       this.id = anId;
       this.card = aCard;
       this.state = 'placed';
    }

    var board;
    var index;

    function dealCells (cards) {
      var i = 1;
      var cells = cards.map(function(card){
        return new Cell(i++, card);
      });
      return cells;
    }

    function makeBoard (cells) {
        index = cells.reduce(function(acc, cell){
          var key = cell.card.lab.id;
          acc[key] = cell.id;
          return acc;
        }, {} );

        board = cells;
        return board;
    }

    // public interface

    this.deal = function() {
      return makeBoard(dealCells(CardFactory));
    };

    this.updateVisibleCells = function() {
       board.map( function(cell) {
         if (cell.card.completed) {
           cell.card.visible = true;
         } else {
           if (cell.card.lab.follows.length == 0) {
             cell.card.visible = true;
           } else {
             var id = cell.card.lab.follows[0]; // TODO plusieurs follows
             var pos = index[id];
             var followed = board[pos - 1];
             if (followed.card.completed) {
               cell.card.visible = true;
             } else {
               cell.card.visible = false;
             }
           }
         }
       });
    };

    this.getCells = function() {
      return board;
    };

    this.getVisibleCells = function() {
      return board.reduce( function(acc, cell) {
        if (cell.card.visible) {
          acc.push(cell);
        }
        return acc;
      }, []);
    };

    this.getCellAt = function(pos) {
      return board[pos];
    };

    function getCellById(id) {
      var pos = index[id] - 1;
      return board[pos];
    }

    this.getCellById = function(id) {
      return getCellById(id);
    };
  });
