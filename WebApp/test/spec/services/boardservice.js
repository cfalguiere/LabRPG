'use strict';

describe('Service: BoardService', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));


    // mock CardFactory
    beforeEach(function () {
      var cardsDependency =   [
        { id: 1, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l1', ref: 'L1', name: 'light 1', description: 'LIGHT 1', theme: 'light' } },
        { id: 2, shape: 'light', color: 'red', completed: false, reachable: false, visible: false,
         lab: { id: 'l2', ref: 'L2', name: 'light 2', description: 'LIGHT 2', theme: 'light' } },
        { id: 3, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm1', ref: 'M1', name: 'music 1', description: 'MUSIC 1', theme: 'music' } },
        { id: 4, shape: 'music', color: 'red', completed: false, reachable: false, visible: false,
          lab: { id: 'm2', ref: 'M2', name: 'music 2', description: 'MUSIC 2', theme: 'music' } }
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

    });

});
