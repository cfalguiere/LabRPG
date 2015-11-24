'use strict';

describe('Controller: LabinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('labrpgApp'));

    // mock GameService
  beforeEach(function () {
      var cell =
         { id: 1,
          card: { id: 1, shape: 'heart', color: 'red', completed: false,
                 lab: { id: 'l1', name: 'light 1', description: 'LIGHT 1' } },
          state: 'placed'};

      var gameDependency =  {
        getSelectedCell : function() {
          return cell;
        },
      };

      module(function ($provide) {
        $provide.value('Gameservice', gameDependency);
      });
  });

  // inject services
  var Gameservice;
  beforeEach(inject(function (_Boardservice_, _Gameservice_) {
     Gameservice = _Gameservice_;
  }));


  var LabinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LabinfoCtrl = $controller('LabinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should know the selectedCell', function () {
    expect(scope.activeCell.card.lab.id).toBe('l1');
  });
});
