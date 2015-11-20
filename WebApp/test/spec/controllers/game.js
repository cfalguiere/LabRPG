'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('labrpgApp'));

  // mock BoardService and gameService
  beforeEach(function () {
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

      var boardDependency =  {
        sortedCellsByCardId : function() {
          var cells = board.reduce(function(acc, row){
            return acc.concat(row);
          });
          return cells;
        },
        getCellAt: function (row, column) {
          return board[row][column];
        },
        deal: function () {
          return board;
        }
      };

      var selectedCell = null;
      var count = 0;
      var gameDependency =  {
        reset : function() { count = 0; selectedCell = null; },
        getBoard : function() { return board; },
        playCell : function(cell) { count++; selectedCell = cell; },
        getSelectedCell : function() { return selectedCell; },
        isCompleted : function() { return count === board.length*board[0].length; }
      };

      module(function ($provide) {
        $provide.value('Boardservice', boardDependency);
        $provide.value('Gameservice', gameDependency);
      });
  });

  // inject services
  var Boardservice, Gameservice;
  beforeEach(inject(function (_Boardservice_, _Gameservice_) {
    Boardservice = _Boardservice_;
    Gameservice = _Gameservice_;
  }));

  var GameCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  describe('On init', function () {

    it('should create a board', function () {
      var board = scope.board;
      expect(board.length).toBe(3);
      expect(board[0].length).toBe(4);
      expect(board[0][0].state).toBe('placed');
    });

    it('does not have a selectedCell', function () {
      expect(scope.selectedCell).toBeNull();
    });

    it('game is not completed', function () {
      expect(scope.completed).toBe(false);
    });

  });
/*
  describe('When user clicks a card', function () {

    it('has a selectedCell', function () {
      expect(scope.selectedCell).toBeNull();
      scope.playCell(scope.board[0][0]);
      expect(scope.selectedCell).not.toBeNull();
    });

  });
  */
/*
  describe('When user removed all cards', function () {

    it('game is completed', function () {
      expect(scope.completed).toBe(false);

      var nbRows = scope.board.length;
      var nbColumns = scope.board[0].length;
      for (var r=0; r<nbRows; r++) {
       for (var c=0; c<nbColumns; c++) {
         scope.playCell(scope.board[r][c]);
         if (r<nbRows-1 && c<nbColumns-1) {
          expect(scope.completed).toBe(false);
         }
       }
      }
      expect(scope.completed).toBe(true);
    });
  });
  */
});
