'use strict';

describe('Service: ComponentsFactory', function () {

  // load the service's module
  beforeEach(module('labrpgApp'));

  // instantiate service
  var ComponentsFactory;
  beforeEach(inject(function (_ComponentsFactory_) {
    ComponentsFactory = _ComponentsFactory_;
  }));

    describe('On initialisation', function(){

        it('returns a map of components', function(){
           expect( ComponentsFactory ).toBeDefined( );
           //expect( ComponentsFactory.attributes().length ).toBeGreaterThan( 0 );
          //TODO
       });

        it('components have an id, a name', function(){
          var cmp = ComponentsFactory['led'];
          expect( cmp.id ).toBeDefined( );
          expect( cmp.name ).toBeDefined( );
        });

        it('has component id led', function(){
          var led = ComponentsFactory['led'];
          expect( led.id ).toBe( 'led' );
          expect( led.name ).toBe( 'LED' );
        });

    });

    describe('Component methods', function(){

       it('returns a folder path', function(){
           var cmp = ComponentsFactory['led'];
           expect( cmp.getFolder() ).toBe('/documents/components/led');
       });

       it('returns a cover image name', function(){
           var cmp = ComponentsFactory['led'];
           expect( cmp.getThumbnail() ).toBe('/documents/components/led/thumbnail.png');
       });
    });


});
