'use strict';

describe('Filter: renderCompleted', function () {

  // load the filter's module
  beforeEach(module('labrpgApp'));

  // initialize a new instance of the filter before each test
  var renderCompleted;
  beforeEach(inject(function ($filter) {
    renderCompleted = $filter('renderCompleted');
  }));

  describe('renderCompleted', function() {

    it('has a renderCompleted Filter', function() {
          expect(renderCompleted).toBeDefined();
    });

    it('should return check', function() {
          var cell1 = { id: 1,
                       card: { id: 1, color: 'red', shape: 'heart', completed: true,
                              lab: { id: 'l1', name: 'light 1', description: 'LIGHT 1'}},
                       state: 'placed' };
          expect(renderCompleted(cell1)).toBe('glyphicon glyphicon-check card-green');
    });

    it('should return unchecked', function() {
          var cell1 = { id: 1,
                       card: { id: 1, color: 'red', shape: 'heart', completed: false,
                              lab: { id: 'l1', name: 'light 1', description: 'LIGHT 1'}},
                       state: 'placed' };
          expect(renderCompleted(cell1)).toBe('glyphicon glyphicon-unchecked card-green');
    });

  });


});
