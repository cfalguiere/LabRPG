'use strict';

describe('Service: BoardService', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));


    // mock CardFactory
    beforeEach(function () {
      var cardsDependency =   [
                    { id: 1, shape: 'heart', color: 'red'},
                    { id: 2, shape: 'heart', color: 'blue'},
                    { id: 3, shape: 'star', color: 'red'},
                    { id: 4, shape: 'star', color: 'blue'},
                    { id: 5, shape: 'music', color: 'red'},
                    { id: 6, shape: 'music', color: 'blue'}
                 ];

      module(function ($provide) {
        $provide.value('CardFactory', cardsDependency);
      });
    });

    // instantiate service
    var Boardservice;
    beforeEach(inject(function (_Boardservice_) {
      Boardservice = _Boardservice_;
    }));

    describe('On deal', function(){

        it('set the board', function(){

          var board = Boardservice.deal();
          expect(board).toBeDefined();

        });

        it('has 3 rows and 4 columns', function(){

          var board = Boardservice.deal();
          expect(board.length).toBe(3);
          expect(board[0].length).toBe(4);
          expect(board[0][0].id).toBeDefined();
          expect(board[0][0].card.id).toBeDefined();

        });

    });


    describe('On sortedCells', function(){

       it('board is flatten and sorted', function(){

          Boardservice.deal();
          var cells = Boardservice.sortedCellsByCardId();

          //expect(cells).toBeNull() ;
          expect(cells.length).toBe(12) ;
          expect(cells[0].card.id).toBe(1) ;
          expect(cells[0].card.id).toBe(cells[1].card.id) ;
          expect(cells[2].card.id).toBe(2) ;

        });

    });


    describe('On getCellAt row column', function(){

       it('returns the cell', function(){

          var board = Boardservice.deal();
          var cell = Boardservice.getCellAt(2, 1);

          expect(cell.id).toBe(board[2][1].id) ;

       });

    });
});
