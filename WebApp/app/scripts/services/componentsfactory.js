'use strict';

/**
 * @ngdoc service
 * @name labrpgApp.ComponentsFactory
 * @description
 * # ComponentsFactory
 * Factory in the labrpgApp.
 */
angular.module('labrpgApp')
  .factory('ComponentsFactory', function () {
    // Service logic
    // ...

    function Component(anId, aName) {
      this.id = anId;
      this.name = aName;
      //TODO getImage
       this.getFolder = function () {
        return '/documents/components/' + this.id;
       };
       this.getThumbnail = function () {
        return this.getFolder() + '/thumbnail.png';
       };
    }

    //TODO test unitaire
    var components = {
      'uno': new Component('uno', 'Arduino UNO') ,
      'breadboard': new Component('breadboard', "Plaque d'essai") ,
      'usb': new Component('usb', 'Cable USB') ,
      'ide': new Component('ide', 'IDE Arduino') ,
      'led': new Component('led', 'LED') ,
      'yellow-led': new Component('yellow-led', 'LED Jaune') ,
      'green-led': new Component('green-led', 'LED Verte') ,
      'red-led': new Component('red-led', 'LED Rouge') ,
      'buzzer': new Component('buzzer', 'Buzzer') ,
      'resistor': new Component('resistor', 'Résistance') ,
      'photo-resistor': new Component('photo-resistor', 'Photo-Résistance'),
      'push-button': new Component('push-button', 'Bouton Poussoir')
    };

    // Public API here
    /*
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
    */

    return components;
  });
