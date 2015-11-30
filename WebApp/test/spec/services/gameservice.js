'use strict';

describe('Service: GameService', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));

    // defines a 4x4 board
    beforeEach( function () {
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
          lab: { id: 'm2', ref: 'M2', name: 'music 2', description: 'MUSIC 2', theme: 'music', follows: ['m1'] } } }
      ];

      var boardDependency =  {
        updateVisibleCells: function () {
        },
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

    it('has no completed cell', function () {
      Gameservice.reset();
      var cell1 = Gameservice.getBoard()[0];
      expect(cell1.state).toBe('placed');
      Gameservice.reset();
    });

    it('has no selected cell', function () {
      Gameservice.reset();
      expect(Gameservice.getSelectedCell()).toBeNull();
      Gameservice.reset();
    });

    it('is not completed', function () {
      Gameservice.reset();
      expect(Gameservice.isCompleted()).toBe(false);
    });

  });

  describe('When user clicks a cell', function () {

    it('becomes selected', function () {
      Gameservice.reset();

      var cell1 = Gameservice.getBoard()[0];
      expect(cell1.state).toBe('placed');
      expect(Gameservice.getSelectedCell()).toBeNull();

      Gameservice.playCell(cell1);
      expect(cell1.state).toBe('selected');
      expect(Gameservice.getSelectedCell()).toBe(cell1);
    });

  });



  describe('When user clicks the completed checkbox', function () {

    it('card is switched', function () {
      Gameservice.reset();
      var cells = Gameservice.getBoard();
      var cell = cells[0];
      var card = cell.card;
      expect(card.completed).toBe(false);
      Gameservice.completeCell(cell);
      expect(card.completed).toBe(true);
      Gameservice.completeCell(cell);
      expect(card.completed).toBe(false);
    });

  });


  describe('When user completed all cards', function () {

    it('game is completed', function () {

      Gameservice.reset();

      expect(Gameservice.isCompleted()).toBe(false);

      var cells = Gameservice.getBoard();

      cells[0].card.completed = true;
      cells[1].card.completed = true;
      cells[2].card.completed = true;
      cells[3].card.completed = true;

      expect(Gameservice.isCompleted()).toBe(true);
    });

  });
});
