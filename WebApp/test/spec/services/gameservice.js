'use strict';

describe('Service: GameService', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));

    // defines a 4x4 board
    beforeEach( function () {
      var board = [
        [
          { id: 1, card: { id: 1, shape: 'heart', color: 'red' }, state: 'placed'},
          { id: 2, card: { id: 1, shape: 'heart', color: 'red' }, state: 'placed'}
        ],
        [
          { id: 3, card: { id: 2, shape: 'heart', color: 'blue' }, state: 'placed'},
          { id: 4, card: { id: 2, shape: 'heart', color: 'blue' }, state: 'placed'}
        ]
      ];

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

      module(function ($provide) {
        $provide.value('Boardservice', boardDependency);
      });
    });

    // instantiate service
    var Gameservice, Boardservice;
    beforeEach(inject(function (_Gameservice_, _Boardservice_) {
      Gameservice = _Gameservice_;
      Boardservice = _Boardservice_;
    }));


  describe('On reset', function () {

    it('has no selectedCell', function () {
      Gameservice.reset();
      var cell1 = Boardservice.getCellAt(0,0);
      Gameservice.playCell(cell1);
      Gameservice.reset();
    });

    it('is not completed', function () {
      Gameservice.reset();
      expect(Gameservice.isCompleted()).toBe(false);
    });

  });

  describe('When user clicks a cell', function () {

    it('if cell is placed it becomes completed', function () {
      Gameservice.reset();

      var cell1 = Boardservice.getCellAt(0,0);
      expect(cell1.state).toBe('placed');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('completed');
    });

    it('if cell is completed and selected again it becomes placed', function () {
      Gameservice.reset();

      var cell1 = Boardservice.getCellAt(0,0);
      expect(cell1.state).toBe('placed');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('completed');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('placed');

    });
  });



  describe('When user completed all cards', function () {

    it('game is completed', function () {

      Gameservice.reset();

      expect(Gameservice.isCompleted()).toBe(false);

      var cells = Boardservice.sortedCellsByCardId();

      cells[0].state = 'completed';
      cells[1].state = 'completed';
      cells[2].state = 'completed';
      cells[3].state = 'completed';

      expect(Gameservice.isCompleted()).toBe(true);
    });

  });
});
