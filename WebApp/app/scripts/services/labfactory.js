'use strict';

/**
 * @ngdoc service
 * @name labrpgApp.LabFactory
 * @description
 * # LabFactory
 * Factory in the labrpgApp.
 */
angular.module('labrpgApp')
  .factory('LabFactory', function (ComponentsFactory) {

    function Lab(anId, aRef, aName, aDescription, aTheme, someFollows, aBom) {
       this.id = anId;
       this.ref = aRef;
       this.name = aName;
       this.description = aDescription;
       this.theme = aTheme;
       this.follows = someFollows;
       this.bom = aBom;
       this.demoImage = null;
       this.getFolder = function () {
        return '/documents/labs/' + this.id;
       };
       this.getCoverImage = function () {
        return this.getFolder() + '/cover.png';
       };
       this.getDemoImage = function () {
         if (this.demoImage !== null) {
           return this.getFolder() + '/' + this.demoImage;
         } else {
           return null;
         }
       };
       this.getGuide = function () {
         return this.getFolder() + '/Guide.pdf';
       };
       this.getCircuit = function () {
         return this.getFolder() + '/SchemaCircuit.png';
       };
       this.getCode = function () {
         if (this.ref !== null) {
           return this.getFolder() + '/' + this.ref + '.zip';
         } else {
           return null;
         }
      };
   }

    // TODO test unitaire
    // TODO mock du component factory
    function BOM() {
      this.components = [];
      this.add = function (aCmpid, aCmpqty) {
        this.components.push( { id: aCmpid, qty: aCmpqty } );
      };
    }


    var light = 'lamp';
    var music = 'music';

    var labs = [];
    var boml1 = new BOM();
    boml1.add(ComponentsFactory['uno'], 1);
    boml1.add(ComponentsFactory['breadboard'], 1);
    boml1.add(ComponentsFactory['usb'], 1);
    boml1.add(ComponentsFactory['ide'], 1);
    boml1.add(ComponentsFactory['led'], 1);
    labs.push( new Lab('l1-lumiere', null, 'Lumière !',
       'Allumer une LED et comprendre comment marche le circuit',
                       light, [], boml1 ) );
    var boml2 = new BOM();
    boml2.add(ComponentsFactory['yellow-led'], 1);
    labs.push( new Lab('l2-feu-cli', 'FeuClignotant', 'Le feu clignotant',
       'Faire clignoter la LED',
                       light, [ 'l1-lumiere' ], boml2 ) );
    var boml3 = new BOM();
    boml3.add(ComponentsFactory['red-led'], 1);
    boml3.add(ComponentsFactory['green-led'], 1);
    labs.push( new Lab('l3-feu-pie', 'FeuPieton', 'Le feu piéton',
       'Contrôler deux LEDs verte et rouge',
                       light, [ 'l2-feu-cli' ], boml3 ) );
    var boml4 = new BOM();
    boml4.add(ComponentsFactory['red-led'], 2);
    boml4.add(ComponentsFactory['yellow-led'], 1);
    boml4.add(ComponentsFactory['green-led'], 2);
    labs.push( new Lab('l4-feu-tri', 'FeuTricolore', 'Le feu de circulation',
       'Faire un feu de circulation avec les 3 couleurs du feu voiture et les 2 couleurs du feu piéton',
                       light, [ 'l3-feu-pie' ], boml4 ) );
    var boml5 = new BOM();
    boml5.add(ComponentsFactory['led'], 1);
    boml5.add(ComponentsFactory['push-button'], 1);
    labs.push( new Lab('l5-morse', 'EmetteurMorse', 'Emettre du Morse',
       'Apprendre à utiliser les boutons poussoirs en faisant un émetteur Morse avec la LED',
                       light, [ 'l2-feu-cli' ], boml5 ) );
    var boml11 = new BOM();
    boml11.add(ComponentsFactory['led'], 4);
    labs.push( new Lab('l11-gui-noel', 'GuirlandeDeNoel', 'Guirlande de Noël',
       'Apprendre à utiliser les boucles en faisant une guirlande de Noël',
                       light, [ 'l3-feu-pie' ], boml11 ) );
    var boml12 = new BOM();
    boml12.add(ComponentsFactory['led'], 4);
    labs.push( new Lab('l12-base2', 'Univac', 'Aux origines',
       'Les premiers ordinateurs n\'avaient pas d\'écran. Ils affichaient les résultats des calculs en allumant des lampes.',
                       light, [ 'l11-gui-noel' ], boml12 ) );
//C’est pour ça que les vieux films de Science-Fiction ont des ordinateurs très bizarres',
    var boml13 = new BOM();
    boml13.add(ComponentsFactory['led'], 4);
    labs.push( new Lab('l13-gui-folle', 'GuirlandeFolle', 'La guirlande folle',
       'On va se servir de l\'affichage de nombre en binaire pour allumer les LEDs de la guirlande et faire des motifs.',
                       light, [ 'l12-base2' ], boml13 ) );
    var boml14 = new BOM();
    boml14.add(ComponentsFactory['led'], 4);
    labs.push( new Lab('l14-enseigne', 'EnseigneLumineuse', 'Enseigne lumineuse',
       'On va reprendre la guirlande folle pour allumer les LEDs dans un certain ordre et faire une enseigne.',
                       light, [ 'l13-gui-folle' ], boml14 ) );


    var bomm1 = new BOM();
    bomm1.add(ComponentsFactory['buzzer'], 1);
    labs.push( new Lab('m1-sirene', 'JouerUneNote', 'La sirène de pompier',
       'Apprendre à utiliser le buzzer pour jouer un son',
                       music, [ 'l1-lumiere' ], bomm1 ) );
    var bomm2 = new BOM();
    bomm2.add(ComponentsFactory['buzzer'], 1);
    labs.push( new Lab('m2-morceau', 'JouerUnMorceau', 'Jouer un morceau',
       'Jouer un morceau et apprendre à utiliser les tableaux',
                       music, [ 'm1-sirene' ], bomm2 ) );
    var bomm3 = new BOM();
    bomm3.add(ComponentsFactory['buzzer'], 1);
    bomm3.add(ComponentsFactory['push-button'], 1);
    labs.push( new Lab('m3-morse-s', 'EmetteurMorseSonore', 'Emetteur Morse Sonore',
       'Apprendre à utiliser les boutons poussoirs en faisant un émetteur Morse sonore',
                       music, [ 'm2-morceau' ], bomm3 ) );
    var bomm4 = new BOM();
    bomm4.add(ComponentsFactory['buzzer'], 1);
    bomm4.add(ComponentsFactory['photo-resistor'], 1);
    labs.push( new Lab('m4-theremine', 'Theremine', 'Le Thérémine',
       'Un instrument de musique électronique où le son est contrôlé par la position des mains.' ,
                       music, [ 'm2-morceau' ], bomm4) );
   //On va construire un thérémine en utilisant le capteur de luminosité. Notre main va masquer la lumière',
    var bomp1 = new BOM();
    bomp1.add(ComponentsFactory['led'], 1);
    labs.push( new Lab('p1-sos-morse', 'SOSMorse', 'SOS Morse',
       'Tu es perdu et ton objectif est de construire un appareil qui émet le signal de détresse S.O.S. toutes les 20 secondes.',
                       light, [ 'l3-feu-pie' ], bomp1 ) );


    // Public API here
    /*
    return {
      someMethod: function () {
        return labs;
      }
    };*/

    return labs;
  });
