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

    function Lab(anId, aRef, aName, aDescription, aTheme) {
       this.id = anId;
       this.ref = aRef;
       this.name = aName;
       this.description = aDescription;
       this.theme = aTheme;
       this.demoImage = null;
       this.getFolder = function () {
        return 'images/labs/' + this.id;
       }
       this.getCoverImage = function () {
        return this.getFolder() + '/cover.png';
       }
       this.getDemoImage = function () {
         if (this.demoImage != null) {
           return this.getFolder() + '/' + this.demoImage;
         } else {
           return null;
         }
       }
       this.getGuide = function () {
         return this.getFolder() + '/guide.pdf';
       }
       this.getCircuit = function () {
         return this.getFolder() + '/SchemaCircuit.png';
       }
       this.getCode = function () {
         if (this.ref != null) {
           return this.getFolder() + '/' + this.ref + '.zip';
         } else {
           return null;
         }
      }
   }

    var light = 'lamp';
    var music = 'music';

    var labs = [];
    labs.push( new Lab('l1-lumiere', null, 'Lumière !',
       'Allumer une LED et comprendre comment marche le circuit', light) );
    labs.push( new Lab('l2-feu-cli', 'FeuClignotant', 'Le feu clignotant',
       'Faire clignoter la LED', light) );
    labs.push( new Lab('l3-feu-pie', 'FeuPieton', 'Le feu piéton',
       'Contrôler deux LEDs verte et rouge', light) );
    labs.push( new Lab('l4-feu-tri', 'FeuTricolore', 'Le feu de circulation',
       'Faire un feu de circulation avec les 3 couleurs du feu voiture et les 2 couleurs du feu piéton',
                       light) );
    labs.push( new Lab('l5-morse', 'EmetteurMorse', 'Emettre du Morse',
       'Apprendre à utiliser les boutons poussoirs en faisant un émetteur Morse lumineux',
                       light) );
    labs.push( new Lab('l11-gui-noel', 'GuirlandeDeNoel', 'Guirlande de Noël',
       'Apprendre à utiliser les boucles en faisant une guirlande de Noël',
                       light) );
    labs.push( new Lab('l12-base2', 'Univac', 'Aux origines',
       'Les premiers ordinateurs n’avaient pas d’écran. Ils affichaient les résultats des calculs en allumant des lampes.',
                       light) );
    labs.push( new Lab('l13-gui-folle', 'GuirlandeFolle', 'La guirlande folle',
       'On va se servir de l’affichage de nombre en binaire pour allumer les LEDs de la guirlande et faire des motifs.',
                       light) );
//C’est pour ça que les vieux films de Science-Fiction ont des ordinateurs très bizarres',


    labs.push( new Lab('m1-sirene', 'JouerUneNote', 'La sirène de pompier',
       'Apprendre à utiliser le buzzer pour jouer un son', music) );
    labs.push( new Lab('m2-morceau', 'JouerUnMorceau', 'Jouer un morceau',
       'Jouer un morceau et apprendre à utiliser les tableaux', music) );
    labs.push( new Lab('m3-morse-s', 'EmetteurMorseSonore', 'Emetteur Morse Sonore',
       'Apprendre à utiliser les boutons poussoirs en faisant un émetteur Morse sonore',
                       music) );
    labs.push( new Lab('m4-theremine', 'Theremine', 'Le Thérémine',
       'Un instrument de musique électronique où le son est contrôlé par la position des mains.' ,
                       music) );
   //On va construire un thérémine en utilisant le capteur de luminosité. Notre main va masquer la lumière',
    labs.push( new Lab('p1-sos-morse', 'SOSMorse', 'SOS Morse',
       'Tu es perdu et ton objectif est de construire un appareil qui émet le signal de détresse S.O.S. toutes les 20 secondes.',
                       light) );


    // Public API here
    /*
    return {
      someMethod: function () {
        return labs;
      }
    };*/

    return labs
  });
