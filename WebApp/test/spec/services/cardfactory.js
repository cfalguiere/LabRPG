'use strict';

describe('Service: CardFactory', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));

    // instantiate service
    var CardFactory;
    beforeEach(inject(function (_CardFactory_) {
      CardFactory = _CardFactory_;
    }));

    describe('On initialisation', function(){

        it('returns a list of cards', function(){

           expect( CardFactory ).toBeDefined( );
           expect( CardFactory.length ).toBeGreaterThan( 0 );

        });

        it('cards have an id, a color and a shape', function(){

          var card = CardFactory[0];
          expect( card.id ).toBeDefined( );
          expect( card.color ).toBeDefined( );
          expect( card.shape ).toBeDefined( );

        });

        it('first card id is 1', function(){

          var card = CardFactory[0];
          expect( card.id ).toBe( 1 );

        });

    });
});
