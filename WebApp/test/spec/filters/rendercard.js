'use strict';

describe('Filter: renderCard', function () {

  // load the filter's module
  beforeEach(module('labrpgApp'));

  // initialize a new instance of the filter before each test
  var render;
  beforeEach(inject(function ($filter) {
    render = $filter('renderCard');
  }));

  describe('render', function() {

    it('has a render Filter', function() {
          expect(render).toBeDefined();
    });

    it('should return a list of CSS classes', function() {
          var cell1 = { id: 1, card: { id: 1, color: 'red', shape: 'heart'}, state: 'placed' };
          expect(render(cell1)).toBe('glyphicon glyphicon-heart card card-placed card-red');
    });

  });


});
