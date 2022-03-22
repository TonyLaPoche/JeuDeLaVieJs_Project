# Jeu de la vie Version JAVASCRIPT
_(inspiration de la vidéo youtube de science étonnante)_

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/julien-fernandez-20b5b027/)

Après visionnage de la vidéo sur l'origine et l'explication du fonctionnement du "Jeu de la vie" par *science étonnante*,
J'ai lancé le défie à un collègue de promo & moi même de recrée cette expérience sur une page HTML CSS et de géré l'activité en **JAVASCRIPT**.

## Le principe

Le Jeu de la vie est un « jeu à zéro joueur », puisqu'il ne nécessite aucune intervention du joueur lors de son déroulement. 
Il s’agit d’un automate cellulaire, un modèle où chaque état conduit mécaniquement à l’état suivant à partir de règles pré-établies.

### Les règles

Le jeu se déroule sur une grille à deux dimensions, théoriquement infinie (*mais ici limité pour le moment*), dont les cases — appelées « cellules »,
 par analogie avec les cellules vivantes — peuvent prendre deux états distincts : **vivante** ou  **morte**.

 - Une cellules ***vivante*** sera **noir**.
 - Une cellules *morte* sera **blanche**.

Une cellule possède huit voisins, qui sont les cellules adjacentes horizontalement, verticalement et diagonalement.

À chaque itération, l'état d’une cellule est entièrement déterminé par l’état de ses huit cellules voisines, selon les règles suivantes :

- Une chute de « bombes » non périodique.
- Une cellule **morte** possédant exactement trois cellules voisines vivantes devient vivante (elle naît) ;
- Une cellule **vivante** possédant deux ou trois cellules voisines vivantes le reste, sinon elle meurt.

Ainsi, la configuration [image](image/exemple%20Readme/Gol-blinker1.png) donne au tour suivant la configuration [image](image/exemple%20Readme/Gol-blinker2.png) qui redonne ensuite la première.

On peut également formuler cette évolution ainsi :

[image](image/exemple%20Readme/Gol-born.png) - si une cellule a exactement trois voisines vivantes, elle est vivante à l’étape suivante.
C’est le cas de la cellule verte dans la configuration de gauche ;

[image](/image/exemple%20Readme/Gol-dead.png) - si une cellule a exactement deux voisines vivantes, elle reste dans son état actuel à l’étape suivante.
Dans le cas de la configuration de gauche, la cellule située entre les deux cellules vivantes reste morte à l’étape suivante ;

[image](image/exemple%20Readme/Gol-nochange.png) - si une cellule a strictement moins de deux ou strictement plus de trois voisines vivantes, elle est morte à l’étape suivante.
C’est le cas de la cellule rouge dans la configuration de gauche.


### Pré-requis

Ce qu'il est requis pour commencer avec votre projet...

- Programme 1
- Programme 2
- etc...

### Installation

Les étapes pour installer votre programme....

Dites ce qu'il faut faire...

_exemple_: Executez la commande ``telnet mapscii.me`` pour commencer ensuite [...]


Ensuite vous pouvez montrer ce que vous obtenez au final...

## Démarrage

Dites comment faire pour lancer votre projet

## Fabriqué avec

Entrez les programmes/logiciels/ressources que vous avez utilisé pour développer votre projet

_exemples :_
* [Materialize.css](http://materializecss.com) - Framework CSS (front-end)
* [Atom](https://atom.io/) - Editeur de textes

## Contributing

Si vous souhaitez contribuer, lisez le fichier [CONTRIBUTING.md](https://example.org) pour savoir comment le faire.

## Versions
Listez les versions ici 
_exemple :_
**Dernière version stable :** 5.0
**Dernière version :** 5.1
Liste des versions : [Cliquer pour afficher](https://github.com/your/project-name/tags)
_(pour le lien mettez simplement l'URL de votre projets suivi de ``/tags``)_

## Auteurs
Listez le(s) auteur(s) du projet ici !
* **Jhon doe** _alias_ [@outout14](https://github.com/outout14)

Lisez la liste des [contributeurs](https://github.com/your/project/contributors) pour voir qui à aidé au projet !

_(pour le lien mettez simplement l'URL de votre projet suivi de ``/contirubors``)_

## License

Ce projet est sous licence ``exemple: WTFTPL`` - voir le fichier [LICENSE.md](LICENSE.md) pour plus d'informations


