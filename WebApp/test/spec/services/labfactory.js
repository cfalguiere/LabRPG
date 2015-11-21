'use strict';

describe('Service: LabFactory', function () {

    // load the service's module
    beforeEach(module('labrpgApp'));

    // instantiate service
    var LabFactory;
    beforeEach(inject(function (_LabFactory_) {
      LabFactory = _LabFactory_;
    }));

    describe('On initialisation', function(){

        it('returns a list of labs', function(){
           expect( LabFactory ).toBeDefined( );
           expect( LabFactory.length ).toBeGreaterThan( 0 );
       });

        it('labs have an id, a name, a description', function(){
          var lab = LabFactory[0];
          expect( lab.id ).toBeDefined( );
          expect( lab.name ).toBeDefined( );
          expect( lab.description ).toBeDefined( );
        });

        it('first card id is 1', function(){
          var lab = LabFactory[0];
          expect( lab.id ).toBe( 'light-1' );
        });

    });

});
