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

    function Lab(anId, aName, aDescription, aTheme) {
       this.id = anId;
       this.name = aName;
       this.description = aDescription;
       this.theme = aTheme;
       this.getFolder = function () {
        return 'images/labs/' + this.id;
       }
       this.getCoverImage = function () {
        return this.getFolder() + '/cover.png';
       }
       this.getDemoImage = function () {
        return this.getFolder() + '/demo.jpg';
       }
    }

    var light = 'lamp';
    var music = 'music';

    var labs = [];
    labs.push( new Lab('l1', 'Lumière !',
       'Allumer une LED et comprendre comment marche le circuit', light) );
    labs.push( new Lab('l2', 'Le feu clignotant',
       'Faire clignoter la LED', light) );
    labs.push( new Lab('l3', 'Le feu piéton',
       'Contrôler deux LEDs verte et rouge', light) );
    labs.push( new Lab('m1', 'La sirène de pompier',
       'Apprendre à utiliser le buzzer pour jouer un son', music) );
    labs.push( new Lab('m2', 'Jouer un morceau',
       'Jouer un morceau et apprendre à utiliser les tableaux', music) );

    // Public API here
    /*
    return {
      someMethod: function () {
        return labs;
      }
    };*/

    return labs
  });
