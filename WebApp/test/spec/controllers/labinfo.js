'use strict';

describe('Controller: LabinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('labrpgApp'));

  // mock BoardService and gameService
  beforeEach(function () {
      var board =  [
        { id: 1, state: 'placed',
         card: { id: 1, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l1', ref: 'L1', name: 'light 1', description: 'LIGHT 1', theme: 'light' } } },
        { id: 2, state: 'placed',
         card: { id: 2, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l2', ref: 'L2', name: 'light 2', description: 'LIGHT 2', theme: 'light' } } },
        { id: 3, state: 'placed',
          card: { id: 3, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm1', ref: 'M1', name: 'music 1', description: 'MUSIC 1', theme: 'music' } } },
        { id: 4, state: 'placed',
          card: { id: 4, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm2', ref: 'M2', name: 'music 2', description: 'MUSIC 2', theme: 'music' } } }
      ];

      var boardDependency =  {
        getCells: function () {
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
        completeCell : function(cell) { count++; cell.state='completed' },
        isCompleted : function() { return count === board.length; }
      };

      module(function ($provide) {
        $provide.value('Boardservice', boardDependency);
        $provide.value('Gameservice', gameDependency);
      });
  });

  // inject services
  var Gameservice, Boardservice;
  beforeEach(inject(function (_Boardservice_, _Gameservice_) {
     Gameservice = _Gameservice_;
     Boardservice = _Boardservice_;
  }));


  var LabinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LabinfoCtrl = $controller('LabinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should know the selectedCell', function () {
      // Game init
      Gameservice.reset();
      scope.board = Gameservice.getBoard();
      Gameservice.playCell(scope.board[0]);
      scope.activeCell = Gameservice.getSelectedCell();
      expect(scope.activeCell.card.lab.id).toBe('l1');
  });

  describe('When user clicks the completed checkbox', function () {

    it('turns to be completed', function () {
      // Game init
      Gameservice.reset();
      scope.board = Gameservice.getBoard();

      scope.activeCell = Boardservice.getCellAt(0);
      expect(scope.activeCell.state).toBe('placed');
      scope.completeCell(scope.activeCell);
      expect(scope.activeCell.state).toBe('completed');
    });

  });

  describe('When user completed all cards', function () {

    it('game is completed', function () {
      // Game init
      Gameservice.reset();
      scope.board = Gameservice.getBoard();
      scope.completed = false;
      expect(scope.completed).toBe(false);

      var nbCells = Boardservice.getCells().length;
      for (var c=0; c<nbCells; c++) {
         scope.completeCell(scope.board[c]);
         if (c<nbCells-1 ) {
            expect(scope.completed).toBe(false);
         }
      }
      expect(scope.completed).toBe(true);
    });
  });


});
