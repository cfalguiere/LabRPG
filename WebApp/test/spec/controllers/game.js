'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('labrpgApp'));

  // mock BoardService and gameService
  beforeEach(function () {
      var board =  [
        { id: 1, state: 'placed',
         card: { id: 1, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l1', ref: 'L1', name: 'light 1', description: 'LIGHT 1', theme: 'light', follows: [] } } },
        { id: 2, state: 'placed',
         card: { id: 2, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l2', ref: 'L2', name: 'light 2', description: 'LIGHT 2', theme: 'light', follows: ['l1']  } } },
        { id: 3, state: 'placed',
          card: { id: 3, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm1', ref: 'M1', name: 'music 1', description: 'MUSIC 1', theme: 'music', follows: ['l1']  } } },
        { id: 4, state: 'placed',
          card: { id: 4, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm2', ref: 'M2', name: 'music 2', description: 'MUSIC 2', theme: 'music', follows: ['m1']  } } }
      ];

      var boardDependency =  {
        getCells: function () {
          return board;
        },
        getVisibleCells: function () {
          return board;
        },
        getCellAt: function (pos) {
          return board[pos];
        },
        deal: function () {
          return board;
        }
      };

      var count = 0;
      var selectedCell = null;
      var gameDependency =  {
        reset : function() { count = 0; },
        getBoard : function() { return board; },
        playCell : function(cell) { selectedCell = cell; cell.state = 'selected';},
        getSelectedCell : function() { return selectedCell; },
        isCompleted : function() { return count === board.length; }
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
      expect(board.length).toBe(4);
      expect(board[0].state).toBe('placed');
    });

    it('game is not completed', function () {
      expect(scope.completed).toBe(false);
    });

  });

  describe('When user clicks a card', function () {

    it('becomes selected', function () {
      Gameservice.reset();
      var activeCell = Boardservice.getCellAt(0);
      expect(activeCell.state).toBe('placed');
      scope.playCell(activeCell);
      expect(activeCell.state).toBe('selected');
      expect(activeCell === Gameservice.getSelectedCell()).toBe(true);
    });

  });


});
