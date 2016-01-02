'use strict';

describe('Controller: ComponentCtrl', function () {

  // load the controller's module
  beforeEach(module('labrpgApp'));

  var ComponentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComponentCtrl = $controller('ComponentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComponentCtrl.awesomeThings.length).toBe(3);
  });
});
