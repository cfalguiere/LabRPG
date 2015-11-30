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

    function dealCells (cards) {
      var i = 1;
      var cells = cards.map(function(card){
        return new Cell(i++, card);
      });
      return cells;
    }

    function makeBoard (cells) {
      /*
        board = [];
        for (var cell in cells) {
           board.push(cell);
        }*/
        board = cells;
        return board;
    }

    // public interface

    this.deal = function() {
      return makeBoard(dealCells(CardFactory));
    };

    this.getCells = function() {
      return board;
    };

    this.getCellAt = function(pos) {
      return board[pos];
    };
  });
