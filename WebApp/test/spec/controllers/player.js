'use strict';

describe('Controller: PlayerCtrl', function () {

  // load the controller's module
  beforeEach(module('labrpgApp'));

  var PlayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerCtrl = $controller('PlayerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  describe('Initialize', function () {

    it('should attach a list of players to the scope', function () {
      expect(scope.players.length).toBe(2);
    });

  });
});
