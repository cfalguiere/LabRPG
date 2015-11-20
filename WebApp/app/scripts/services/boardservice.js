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
    var nbLines = 3;
    var nbCols = 4;

    //@ http://jsfromhell.com/array/shuffle [v1.0]
   /*
    function shuffle (o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
        }
        return o;
    } */

    function dealCells (cards) {
      var cells = [];
      var nbCells = nbLines * nbCols;
      var nbCards = cards.length;
      var cardIndex = 0;
      for (var cellId = 1; cellId <= nbCells; cardIndex++) {
        if (cardIndex >= nbCards) {
          cardIndex = 0;
        }
        cells.push( new Cell(cellId++, cards[cardIndex]) );
        cells.push( new Cell(cellId++, cards[cardIndex]) );
      }
      return cells;
    }

    function makeBoard (cells) {
      board = [];
      var i = 0;
      for (var l = 0; l < nbLines; l++) {
        var row = [];
        for (var c = 0; c < nbCols; c++) {
          row.push( cells[i++] );
        }
        board.push(row);
      }

      return board;
    }

    // public interface

    this.deal = function() {
      //var cards = shuffle(CardFactory);
      //var shuffledCells = shuffle(dealCells(cards));
      //return makeBoard(shuffledCells);
      return makeBoard(dealCells(CardFactory));
    };

    this.sortedCellsByCardId = function() {
      var cells = board.reduce(function(acc, row){
         return acc.concat(row);
      });
      function compareByCardId (a, b) {
        return a.card.id - b.card.id;
      }

      return cells.sort(compareByCardId);
    };

    this.getCellAt = function(row, column) {
      return board[row][column];
    };
  });
