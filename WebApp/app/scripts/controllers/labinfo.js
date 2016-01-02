'use strict';

/**
 * @ngdoc function
 * @name labrpgApp.controller:LabinfoCtrl
 * @description
 * # LabinfoCtrl
 * Controller of the labrpgApp
 */
angular.module('labrpgApp')
  .controller('LabinfoCtrl', function ($scope, $location, Gameservice) {
    $scope.activeCell = Gameservice.getSelectedCell();

    $scope.completeCell = function (cell) {
       Gameservice.completeCell(cell);
       $scope.completed = Gameservice.isCompleted();
    };

    $scope.showComponent = function (cmp) {
      $scope.activeComponent = cmp;
      $location.path('component');
    };

  });
