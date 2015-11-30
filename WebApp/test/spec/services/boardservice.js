'use strict';

describe('Service: BoardService', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));


    // mock CardFactory
    beforeEach(function () {
      var cardsDependency =   [
        { id: 1, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l1', ref: 'L1', name: 'light 1', description: 'LIGHT 1', theme: 'light', follows: [] } },
        { id: 2, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l2', ref: 'L2', name: 'light 2', description: 'LIGHT 2', theme: 'light', follows: ['l1']  } },
        { id: 3, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm1', ref: 'M1', name: 'music 1', description: 'MUSIC 1', theme: 'music', follows: ['l1']  } },
        { id: 4, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm2', ref: 'M2', name: 'music 2', description: 'MUSIC 2', theme: 'music', follows: ['m1']  } }
      ];

      module(function ($provide) {
        $provide.value('CardFactory', cardsDependency);
      });
    });

    // instantiate service
    var Boardservice, CardFactory;
    beforeEach(inject(function (_Boardservice_, _CardFactory_) {
      Boardservice = _Boardservice_;
      CardFactory = _CardFactory_;
    }));

    describe('On deal', function(){

        it('set the board', function(){
          var board = Boardservice.deal();
          expect(board).toBeDefined();
          expect(board.length).toBe(4);
          expect(board[0].id).toBe(1) ;
          expect(board[0].card.id).toBe(1) ;
          expect(board[0].card.lab.id).toBe('l1') ;
        });

        it('set the index', function(){
          var board = Boardservice.deal();
          var cell = Boardservice.getCellById('l1');
          expect(cell).toBeDefined();
          expect(cell.id).toBe(1) ;
          expect(cell.card.id).toBe(1) ;
          expect(cell.card.lab.id).toBe('l1') ;
        });

    });

    describe('On updateVisibleCells', function(){

        it('set the board', function(){
          var board = Boardservice.deal();
          expect(board).toBeDefined();
          Boardservice.updateVisibleCells();
          expect(board[0].card.visible).toBe(true);
          expect(board[1].card.visible).toBe(false);
          expect(board[2].card.visible).toBe(false);
          expect(board[3].card.visible).toBe(false);

          var cell1 = board[0];
          cell1.card.completed = true;
          Boardservice.updateVisibleCells();
          expect(board[0].card.visible).toBe(true);
          expect(board[1].card.visible).toBe(true);
          expect(board[2].card.visible).toBe(true);
          expect(board[3].card.visible).toBe(false);
       });

    });

      describe('On getVisibleCells', function(){

        it('set the board', function(){
          var board = Boardservice.deal();
          expect(board).toBeDefined();
          Boardservice.updateVisibleCells();
          var cells1 = Boardservice.getVisibleCells();
          expect(cells1.length).toBe(1);

          var cell1 = board[0];
          cell1.card.completed = true;
          Boardservice.updateVisibleCells();
          var cells2 = Boardservice.getVisibleCells();
          expect(cells2.length).toBe(3);
       });

    });

});
