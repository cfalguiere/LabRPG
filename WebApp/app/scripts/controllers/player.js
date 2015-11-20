'use strict';

/**
 * @ngdoc function
 * @name labrpgApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the labrpgApp
 */
angular.module('labrpgApp')
  .controller('PlayerCtrl', function ($scope) {

    $scope.newPlayer = '';
    $scope.players = [
      'Alice',
      'Bob'
    ];

    $scope.addPlayer = function () {
      //$window.alert('adding ' + $scope.newPlayer);
      $scope.players.push($scope.newPlayer);
      $scope.newPlayer = '';
    };

});
