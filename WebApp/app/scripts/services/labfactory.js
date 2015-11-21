'use strict';

/**
 * @ngdoc service
 * @name labrpgApp.LabFactory
 * @description
 * # LabFactory
 * Factory in the labrpgApp.
 */
angular.module('labrpgApp')
  .factory('LabFactory', function () {

    function Lab(anId, aName, aDescription) {
       this.id = anId;
       this.name = aName;
       this.description = aDescription;
    }

    var labs = [];
    labs.push( new Lab('light-1', 'Lumière !',
       'Allumer une LED et comprendre comment marche le circuit') );
    labs.push( new Lab('light-2', 'Morse',
       'Allumer et éteindre la LED avec un interrupteur') );
    labs.push( new Lab('music-1', 'Jouer un son',
       'Apprendre à utiliser le buzzer pour jouer un son') );
    labs.push( new Lab('music-2', 'Jouer un morceau',
       'Jouer un morceau et apprendre à utiliser les tableaux') );

    // Public API here
    /*
    return {
      someMethod: function () {
        return labs;
      }
    };*/

    return labs
  });
