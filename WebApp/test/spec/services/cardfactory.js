'use strict';

describe('Service: CardFactory', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));

     // defines a 4x4 board
    beforeEach( function () {
      var labs = [
          { id: 'l1', name: 'light 1', description: 'LIGHT 1' },
          { id: 'l2', name: 'light 2', description: 'LIGHT 2' },
          { id: 'm1', name: 'music 1', description: 'MUSIC 1' },
          { id: 'm2', name: 'music 2', description: 'MUSIC 2' },
      ];
      var labDependency = labs;
      module(function ($provide) {
        $provide.value('LabFactory', labDependency);
      });
    });


    // instantiate service
    var CardFactory, LabFactory;
    beforeEach(inject(function (_CardFactory_,_LabFactory_) {
      CardFactory = _CardFactory_;
      LabFactory = _LabFactory_;
    }));

    describe('On initialisation', function(){

        it('returns a list of cards', function(){
          expect( CardFactory ).toBeDefined( );
          expect( CardFactory.length ).toBe( 4 );
        });

        it('cards have an id, a color and a shape', function(){
          var card = CardFactory[0];
          expect( card.id ).toBeDefined( );
          expect( card.color ).toBeDefined( );
          expect( card.shape ).toBeDefined( );
        });

        it('cards have a lab', function(){
          var card = CardFactory[0];
          expect( card.lab ).toBeDefined( );
          expect( card.lab.id ).toBe( 'l1' );
        });

        it('first card id is 1', function(){
          var card = CardFactory[0];
          expect( card.id ).toBe( 1 );
          expect( card.shape ).toBe( 'heart' );
          expect( card.color ).toBe( 'cyan' );
        });

    });
});
