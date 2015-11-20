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
      expect(Gameservice.getSelectedCell()).toBeNull();
    });

    it('is not completed', function () {
      Gameservice.reset();
      expect(Gameservice.isCompleted()).toBe(false);
    });

  });

  describe('When user clicks a cell while no other cell is selected', function () {

    it('if cell is placed it becomes selected', function () {
      Gameservice.reset();
      expect(Gameservice.getSelectedCell()).toBeNull();

      var cell1 = Boardservice.getCellAt(0,0);
      expect(cell1.state).toBe('placed');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('selected');
      expect(Gameservice.getSelectedCell()).toBe(cell1);
    });

    it('if cell is selected again it becomes placed and no cell is selected', function () {
      Gameservice.reset();
      expect(Gameservice.getSelectedCell()).toBeNull();

      var cell1 = Boardservice.getCellAt(0,0);
      expect(cell1.state).toBe('placed');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('selected');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('placed');
    });
  });

  describe('When user clicks a cell while another cell is selected', function () {

    it('if they match both become removed and no cell is selected', function () {
      Gameservice.reset();
      expect(Gameservice.getSelectedCell()).toBeNull();

      var cells = Boardservice.sortedCellsByCardId();
      var cell1 = cells[0];
      var cell2 = cells[1];
      expect(cell1.card.id).toBe(cell2.card.id);
      expect(cell1.state).toBe('placed');
      expect(cell2.state).toBe('placed');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('selected');
      expect(Gameservice.getSelectedCell()).toBe(cell1);

      Gameservice.playCell(cell2);
      expect(cell1.state).toBe('removed');
      expect(cell2.state).toBe('removed');
      expect(Gameservice.getSelectedCell()).toBeNull();
    });


    it('if they do not match last becomes selected', function () {
      Gameservice.reset();
      expect(Gameservice.getSelectedCell()).toBeNull();

      var cells = Boardservice.sortedCellsByCardId();
      var cell1 = cells[0];
      var cell2 = cells[2];
      expect(cell1.card.id).not.toBe(cell2.card.id);
      expect(cell1.state).toBe('placed');
      expect(cell2.state).toBe('placed');

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('selected');
      expect(Gameservice.getSelectedCell()).toBe(cell1);

      Gameservice.playCell(cell2);
      expect(cell1.state).toBe('placed');
      expect(cell2.state).toBe('selected');
      expect(Gameservice.getSelectedCell()).toBe(cell2);
    });

  });


  describe('When user removed all cards', function () {

    it('game is completed', function () {

      Gameservice.reset();

      expect(Gameservice.isCompleted()).toBe(false);

      var cells = Boardservice.sortedCellsByCardId();

      cells[0].state = 'removed';
      cells[1].state = 'removed';
      cells[2].state = 'removed';
      cells[3].state = 'removed';

      expect(Gameservice.isCompleted()).toBe(true);
    });

  });
});
